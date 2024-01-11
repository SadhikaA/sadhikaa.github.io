---
title: 'Neural Networks: Zero to Hero'
date: '2024-01-01'
---

## Micrograd

> 🔥 Goal: 
> implementing scalar based neural network from first principles with backpropagation, activation function, and gradient descent

- in the real world, we use n-dimensional tensors and not scalars
- what is a derivative fundamentally?
    - if we slightly increase our value for x, does our value for f(x) go up/down and by how much
- we want to be able to represent complex mathematical expressions so we create `Value` object that holds the operations

# *note* add photo 

### Value Class

```python
class Value:
    def __init__(self, data, _children=(), _operation="", label=""):
        self.data = data
        self.grad = 0.0      # dL / dValue
        self._prev = set(_children)     # bc its a set, self will only be added once
        self._op = _operation
        self.label = label
        self._backward = lambda: None  # chain rule func for each node
        # default: set to function that does nothing, ex for leaf nodes

    def __repr__(self):
        return f"Value(data={self.data})"

    def __add__(self, other):
        other = other if isinstance(other, Value) else Value(other)   # if other is not a Value, cast it
        out = Value(self.data + other.data, (self, other), '+')

        def _backward():
            # chain rule for addition - 1 bc deriv is just 1
            self.grad += 1.0 * out.grad
            other.grad += 1.0 * out.grad
        out._backward = _backward        # will later call this function to propagate the gradient

        return out

    def __mul__(self, other):
        other = other if isinstance(other, Value) else Value(other)   # if other is not a Value, cast it
        out = Value(self.data * other.data, (self, other), '*')

        def _backward():
            # out.grad stores the derivative so far the chainrule of dL/d_prev
            self.grad += other.data * out.grad
            other.grad += self.data * out.grad
        out._backward = _backward

        return out

    def __neg__(self):
        return self * -1

    def __sub__(self, other):
        return self + (-other)

    def __pow__(self, other):
        assert isinstance(other, (int, float)), "only supporting int/float powers for now"
        out = Value(self.data ** other, (self, ), f'**{other}')

        def _backward():
            self.grad += other * (pow(self.data, other - 1)) * out.grad

        out._backward = _backward
        return out

    def __rmul__(self, other):      # other * self, will swap the multiplication
        return self * other

    def __truediv__(self, other):    # self / other
        return self * other ** -1  # so that we can implement an x^k function instead

    def exp(self):
        n = self.data
        out = Value(math.exp(n), (self, ), 'exp')

        def _backward():
            self.grad += out.data * out.grad
        out._backward = _backward

        return out

    def tanh(self):
        n = self.data
        t = (math.exp(2*n) - 1) / (math.exp(2*n) + 1)
        out = Value(t, (self, ), 'tanh')

        def _backward():
            # local deriv = (1 - t**2)
            self.grad += (1 - t**2) * out.grad
        out._backward = _backward

        return out

    def backward(self):
        # the last node has to be called backward first and then we work backwards
        # all forward dependencies must be handled first so use topo sort to get order of calling backwards
        topo = []
        visited = set()
        def build_topo(v):
            if v not in visited:
                visited.add(v)
                for child in v._prev:
                    build_topo(child)
                topo.append(v)  # topo will only add itself to list after all its children have been considered
        build_topo(self)

        self.grad = 1.0
        for node in reversed(topo):
            node._backward()
```
### Manual Backprop

- we want to simulate back-propagation 
- how do we do back-propagation: **chain rule**
- **activation functions**: decides whether a neuron should be activated or not by calculating the weighted sum and further adding bias to it (introduces non-linearity to the output of the function) - returns 0 or 1
    - sigmoid, tanh, relu
- putting it all together:

```python
# inputs
x1 = Value(2.0, label='x1')
x2 = Value(0.0, label='x2')

# weights
w1 = Value(-3.0, label='w1')
w2 = Value(1.0, label='w2')

# bias of the neuron
b = Value(6.8813735870194432, label='b')

# x1w1 + x2w2 + b
x1w1 = x1 * w1
x1w1.label = 'x1*w1'
x2w2 = x2 * w2
x2w2.label = 'x2*w2'
x1w1x2w2 = x1w1 + x2w2
x1w1x2w2.label = 'x1*w1 + x2*w2'
n = x1w1x2w2 + b
n.label = "n"
o.grad = 0
o = n.tanh()    # activation function
o.label = "o"
o.backward()
```

### Multi-Layer Perceptron

```python
# want to build a multi layer perceptron (MLP) so let's start with just the neuron first though

class Neuron:

    # nin = number of inputs to the neuron
    def __init__(self, nin):
        self.w = [Value(random.uniform(-1, 1)) for _ in range(nin)]    # create random weight for each inp
        self.b = Value(random.uniform(-1, 1))     # random bias

    def __call__(self, x):      # when we do n(x) and n is a Neuron object
        # w * x + b, and w * x is a dot product
        act = sum((wi*xi for wi, xi in zip(self.w, x)), self.b)       # pair each w and x tgt
        out = act.tanh()      # activation layer
        return out

    def parameters(self):      # return parameters so we can manipulate them
        return self.w + [self.b]

class Layer:

    def __init__(self, nin, nout):     # number of outputs
        self.neurons = [Neuron(nin) for _ in range(nout)]    # represent a layer as a list of neurons

    def __call__(self, x):
        outs = [n(x) for n in self.neurons]
        return outs[0] if len(outs) == 1 else outs

    def parameters(self):
        return [p for neuron in self.neurons for p in neuron.parameters()]

class MLP:

    def __init__(self, nin, nouts):     # list of nouts where each value is the size of that layer
        size = [nin] + nouts           # [nin, nouts...]
        # create a layer between each two layers based on that size
        self.layers = [Layer(size[i], size[i + 1]) for i in range(len(nouts))]

    def __call__(self, x):
        for layer in self.layers:
            x = layer(x)
        return x

    def parameters(self):
        return [p for layer in self.layers for p in layer.parameters()]
```

### PyTorch Implementation

```python
# micrograd is based on scalar, let's use pytorch to work with tensors

import torch

x1 = torch.tensor([2.0]).double();                x1.requires_grad = True
x2 = torch.tensor([0.0]).double();                x2.requires_grad = True
w1 = torch.tensor([-3.0]).double();               w1.requires_grad = True
w2 = torch.tensor([1.0]).double();                w2.requires_grad = True
b = torch.tensor([6.8813735870194432]).double();  b.requires_grad = True
n = x1*w1 + x2*w2 + b
o = torch.tanh(n)

print('o', o.data.item())
o.backward()

print("---")
print('x2', x2.grad.item())
print('w2', w2.grad.item())
print('x1', x1.grad.item())
print('w1', w1.grad.item())
```

### Gradient Descent

- **gradient descent**: iteratively update our NN and lower our loss
- **learning rate:** $\alpha$, is important to consider
    - too high - unstable, possibly exploding loss
    - too low - convergent might take too long
    - can also have learning rate decay (over time bring down the learning rate)
- forward pass > evaluate loss > backward pass > zero grad > update
- **L2 regularization** = controls overfitting

### Measuring Performance

- **loss**: performance of the neural net, how can we measure how far off our gradient from our output is from our desired output
- **goal**: always to minimize loss
- different ways of measuring loss though
    - GPT uses cross-entropy loss

```python
# binary classifier neural net
n = MLP(3, [4, 4, 1])        # 3 input neurons, 2 layers of 4, one output neuron
xs = [
    [2.0, 3.0, -1.0],
    [3.0, -1.0, 0.5],
    [0.5, 1.0, 1.0],
    [1.0, 1.0, -1.0]
]
ys = [1.0, -1.0, -1.0, 1.0]    # desired targets

for k in range(20):

    # forward pass
    ypred = [n(x) for x in xs]

    # evaluate loss
    loss = [(yout - ygt)**2 for ygt, yout in zip(ys, ypred)]   # mean squared error, how close are we
    loss = loss[0] + loss[1] + loss[2] + loss[3]

    # backward pass
    # zero grad
    for p in n.parameters():
        p.grad = 0.0
    loss.backward()         # wo resetting gradients, they just add up and never get flushed

    # update
    for p in n.parameters():
        p.data += -0.05 * p.grad           # 0.05 is learning rate

    print(k, loss.data)
print(ypred)
```