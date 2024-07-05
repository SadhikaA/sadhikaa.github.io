import styles from '../components/layout.module.css';
import Layout from '../components/layout';
import Head from 'next/head';
import Image from 'next/image';

/* HW 1 Images */
import basic_test4_pixel from '../images/graphics/hw1/basic_test4_pixel.png';
import test4_1 from '../images/graphics/hw1/test4_1.png';
import test4_4 from '../images/graphics/hw1/test4_4.png';
import test4_9 from '../images/graphics/hw1/test4_9.png';
import test4_16 from '../images/graphics/hw1/test4_16.png';
import robot from '../images/graphics/hw1/robot.png';
import bary from '../images/graphics/hw1/bary.png';
import bary_triangle from '../images/graphics/hw1/bary_triangle.png';
import nearest_1_side from '../images/graphics/hw1/nearest_1_side.png';
import nearest_16_side from '../images/graphics/hw1/nearest_16_side.png';
import nearest_linear from '../images/graphics/hw1/nearest_linear.png';
import nearest_nearest from '../images/graphics/hw1/nearest_nearest.png';
import bilinear_1_side from '../images/graphics/hw1/bilinear_1_side.png';
import bilinear_16_side from '../images/graphics/hw1/bilinear_16_side.png';
import zero_linear from '../images/graphics/hw1/zero_linear.png';
import zero_nearest from '../images/graphics/hw1/zero_nearest.png';

/* HW 2 Images */
import e0 from '../images/graphics/hw2/e0.png';
import e1 from '../images/graphics/hw2/e1.png';
import e2 from '../images/graphics/hw2/e2.png';
import e3 from '../images/graphics/hw2/e3.png';
import e4 from '../images/graphics/hw2/e4.png';
import e5 from '../images/graphics/hw2/e5.png';
import c1 from '../images/graphics/hw2/c1.png';
import c2 from '../images/graphics/hw2/c2.png';
import crumpled1 from '../images/graphics/hw2/crumpled 1.png';
import crumpled2 from '../images/graphics/hw2/crumpled 2.png';
import crumpled3 from '../images/graphics/hw2/crumpled 3.png';
import crumpled4 from '../images/graphics/hw2/crumpled 4.png';
import crumpled5 from '../images/graphics/hw2/crumpled 5.png';
import crumpled6 from '../images/graphics/hw2/crumpled 6.png';
import edge_flip from '../images/graphics/hw2/edge_flip.png';
import edgeflip1 from '../images/graphics/hw2/edgeflip1.png';
import edgeflip2 from '../images/graphics/hw2/edgeflip2.png';
import flat from '../images/graphics/hw2/flat.png';
import lvl0 from '../images/graphics/hw2/lvl0.png';
import lvl1 from '../images/graphics/hw2/lvl1.png';
import lvl2 from '../images/graphics/hw2/lvl2.png'; 
import lvl3 from '../images/graphics/hw2/lvl3.png';
import lvl4 from '../images/graphics/hw2/lvl4.png';
import lvl5 from '../images/graphics/hw2/lvl5.png';
import lvl6 from '../images/graphics/hw2/lvl6.png';
import lvl7 from '../images/graphics/hw2/lvl7.png';
import phong from '../images/graphics/hw2/phong.png';
import presplit from '../images/graphics/hw2/presplit.png';
import presplit1 from '../images/graphics/hw2/presplit1.png';
import presplit2 from '../images/graphics/hw2/presplit2.png';
import presplit3 from '../images/graphics/hw2/presplit3.png';
import presplit4 from '../images/graphics/hw2/presplit4.png';
import split from '../images/graphics/hw2/split.png';
import splitflip from '../images/graphics/hw2/splitflip.png';
import tea0 from '../images/graphics/hw2/tea0.png';
import tea1 from '../images/graphics/hw2/tea1.png';
import teapot_gray from '../images/graphics/hw2/teapot_gray.png';
import teapot from '../images/graphics/hw2/teapot.png';
import cow0 from '../images/graphics/hw2/cow0.png';
import cow1 from '../images/graphics/hw2/cow1.png';

export default function Graphics() {
return (
<>
    <Head>
        <title>Computer Graphics Projects</title>
        <link
            rel="icon"
            href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌊</text></svg>" />
    </Head>
    <Layout>
        <div className={styles.leftColumn}>
        </div>
        <div className={styles.rightColumn}>
            <h3>🫖 Computer Graphics Projects</h3>
            <p className={styles.contentTag}>CGL (C Graphics Lib)</p>
            <hr></hr>
            <ul>
                <li><a href="#1" className={styles.contentsLink}>Assignment 1: Rasterization</a></li>
                <ul style={{ paddingLeft: '20px' }}>
                    <li><a href="#1a" className={styles.contentsLink}>Drawing Single-Color Triangles</a></li>
                    <li><a href="#1b" className={styles.contentsLink}>Antialiasing by Supersampling</a></li>
                    <li><a href="#1c" className={styles.contentsLink}>Transforms</a></li>
                    <li><a href="#1d" className={styles.contentsLink}>Barycentric Coordinates</a></li>
                    <li><a href="#1e" className={styles.contentsLink}>"Pixel Sampling" for Texture Mapping</a></li>
                    <li><a href="#1f" className={styles.contentsLink}>"Level Sampling" with mipmaps for Texture Mapping</a></li>
                </ul>
                <li><a href="#2" className={styles.contentsLink}>Assignment 2: Mesh Geometry</a></li>
                <ul style={{ paddingLeft: '20px' }}>
                    <li><a href="#2a" className={styles.contentsLink}>Bezier Curves with 1D de Casteljau Subdivision</a></li>
                    <li><a href="#2b" className={styles.contentsLink}>Bezier Curves with Seperable 1D de Casteljau</a></li>
                    <li><a href="#2c" className={styles.contentsLink}>Area-Weighted Vertex Normals</a></li>
                    <li><a href="#2d" className={styles.contentsLink}>Edge Flip</a></li>
                    <li><a href="#2e" className={styles.contentsLink}>Edge Split</a></li>
                    <li><a href="#2f" className={styles.contentsLink}>Loop Subdivision for Mesh Upsampling</a></li>
                </ul>
                <li><a href="#3" className={styles.contentsLink}>Assignment 3: Ray Tracing</a></li>
                <ul style={{ paddingLeft: '20px' }}>
                    <li><a href="#3a" className={styles.contentsLink}>Ray Generation and Scene Intersection</a></li>
                    <li><a href="#3b" className={styles.contentsLink}>Bounding Volume Hierarchy</a></li>
                    <li><a href="#3c" className={styles.contentsLink}>Direct Illumination</a></li>
                    <li><a href="#3d" className={styles.contentsLink}>Global Illumination</a></li>
                    <li><a href="#3e" className={styles.contentsLink}>Adaptive Sampling</a></li>
                </ul>
                <li><a href="#4" className={styles.contentsLink}>Assignment 4: Animation</a></li>
                <ul style={{ paddingLeft: '20px' }}>
                    <li><a href="#4a" className={styles.contentsLink}>Masses and Springs</a></li>
                    <li><a href="#4b" className={styles.contentsLink}>Simulation via Numerical Integratio</a></li>
                    <li><a href="#4c" className={styles.contentsLink}>Handling Collisions</a></li>
                    <li><a href="#4d" className={styles.contentsLink}>Handling Self-Collisions</a></li>
                    <li><a href="#4e" className={styles.contentsLink}>Shaders</a></li>
                </ul>
            </ul>
            <hr></hr>
            <p></p>
            <h3 id="1">Rasterization</h3>
            <p>In this homework, the goal was to implement a simple rasterizer with features such as drawing triangles, supersampling, hierarchal transforms, and texture mapping with antialiasing, resulting in a functional vector graphics renderer. I learnt quite a bit about each of the sampling algorithms and texture mapping algorithms implemented throughout the project. I also learnt more about the sampling pipeline and how to represent the abstractions of sample buffer, pixels, texels, and coordinate systems through the data structures used in this project.</p>
            <h4 id="1a">Drawing Single-Color Triangles</h4>
            <p>In order to rasterize triangles to the frame buffer, I check if the center of each pixel is within the triangle. The <code>rasterize_triangle</code> function takes in coordinates for each of the three corners of the triangle. My implementation first determines what the smallest bounding box (calculated by determining the lowest and highest x and y values that the triangle covered) around the triangle. Then, it iterates through each pixel in the bounding box and checks if the center of the pixel is within the triangle. We check if the center of the pixel <code>(x + 0.5, y + 0.5)</code> is in the triangle by checking to see that it is within the three edges of the triangle. If it is, the pixel is filled in with the color of the triangle. This handles coordinates received in the clockwise direction, but to include coordinates in the counter-clockwise direction, I reversed the inequality check.</p>

            <p>This algorithm is no worse than traversing each sample individually in the bounding box of the triangle and determining if it's in the triangle because we still iterate through all the points in the bounding box. There is no optimization or short circuiting that reduces the number of pixels traversed.</p>
            <div className={styles.imageContainer}>
                <Image src={basic_test4_pixel} alt="basic_test4_pixel" width={250} className={styles.mobileImage}/>
            </div>
            <h4 id="1b">Antialiasing by Supersampling</h4>
            <p>In this task, I implemented supersampling by updating the <code>sample_buffer</code> data structure and modifying certain algorithms. Supersampling is useful because it allows us to antialias and reduce the jaggies in our images, making pixels seem smoother zoomed out. The modifications I made to the rasterization pipeline was to first change the size of the <code>sample_buffer</code> to include the number of samples we wanted to sample, <code>width * height * sample_rate</code>. Now, each <code>(x, y)</code> pixel will be represented by a sample_rate number of samples that will be averaged in order to downsample to determine the color of the original pixel. I added a new <code>fill_sample</code> function which fills in the color of a specific sample for an <code>(x, y)</code> pixel and updates its color in the sample_buffer by using a new indexing method: <code>sample_buffer[sample_rate * (y * width + x) + s]</code>. I updated the <code>fill_pixel</code> sample to stay consistent for points and lines by calling <code>fill_sample</code> for the number of samples in the pixel, effectively making sure that all samples have the same color. In <code>rasterize_triangle</code>, I now iterated through each sample, rather than pixel to check if we were within bounds, and called <code>fill_sample</code> instead of <code>fill_pixel</code>. Finally, in <code>resolve_to_framebuffer</code>, I updated the frame buffer by getting all samples that corresponded to an <code>(x, y)</code> pixel and averaging the RGB values of all the samples to get the final color, which was then resolved to the framebuffer target.</p>
            <div className={styles.imageContainer}>
                <Image src={test4_1} alt="basic_test4_pixel" width={150} className={styles.mobileImage}/>
                <Image src={test4_4} alt="basic_test4_pixel" width={150} className={styles.mobileImage}/>
                <Image src={test4_9} alt="basic_test4_pixel" width={150} className={styles.mobileImage}/>
                <Image src={test4_16} alt="basic_test4_pixel" width={150} className={styles.mobileImage}/>
            </div>
            <div className={styles.imageContainer}>
                <caption>Sample rates of 1, 4, 9, and 16</caption>
            </div>
            <h4 id="1c">Transforms</h4>
            <div className={styles.imageContainer}>
                <Image src={robot} alt="robot" width={350} className={styles.mobileImage}/>
            </div>
            <div className={styles.imageContainer}>
                <caption>Cubedude stands on their head</caption>
            </div>
            <h4 id="1d">Barycentric Coordinates</h4>
            <p>Barycentric coordinates work by determining our color based on the distance each point is from each vertex. As we can see with our triangle, each vertex is red, green, or blue. We end up with a gradient triangle as our final image because for each point not at the vertices, we calculate a certain weight of red, green, and blue based on distance and end up with a weighted sum of RGB colors within the triangle.</p>
            <p>We calculate the barycentric coordinates by solving for the value of each our new color coordinate system (<code>alpha</code>, <code>beta</code>, and <code>gamma</code>) based on the current <code>(x, y)</code> coordinate. This allows us to assign colors based on the strength of how close each of the points are too the . We then calculate the color by interpolating across the colors passed in to the function to get a weighted sum: <code>alpha * c0 + beta * c1 + gamma * c2</code>. This is our new value for the color at the point <code>(x, y)</code> so we call <code>fill_sample</code> with the new color.</p>
            <div className={styles.imageContainer}>
                <Image src={bary} alt="robot" width={250} className={styles.mobileImage}/>
                <Image src={bary_triangle} alt="robot" width={250} className={styles.mobileImage}/>
            </div>
            <div className={styles.imageContainer}>
                <caption>Barycentric circle and triangle</caption>
            </div>
            <h4 id="1d">"Pixel Sampling" for Texture Mapping</h4>
            <p>With texture mapping, the goal is to interpolate to find the texture coordinate <code>(u, v)</code> for each <code>(x, y)</code> coordinate. We can do this using nearest and bilinear sampling methods.</p>
            <p>I implemented texture mapping by calculating the <code>uv</code> coordinates based on the barycentric coordinates that had been calculated. I initialized the <code>SampleParams</code> struct with the <code>uv</code> values and then sampled from the texture based on which sampling method we wanted to use. The <code>sample</code> function returns a color which can then be used to fill the sample.</p>
            <p>In the <code>sample_nearest</code> function, I found the nearest pixel to our <code>uv</code> coordinate and then returned the color of that pixel on the mipmap. To implement <code>sample_bilinear</code>, I got the nearest 4 texels to our <code>uv</code> coordinate. After, getting the colors, I linearly interpolated in both directions and then did a final interpolation of the two interpolations to get the final color value.</p>
            <div className={styles.imageContainer}>
                <Image src={nearest_1_side} alt="robot" width={250} className={styles.mobileImage}/>
                <Image src={nearest_16_side} alt="robot" width={250} className={styles.mobileImage}/>
            </div>
            <div className={styles.imageContainer}>
                <caption>Nearest with sample_rate 1 and 16</caption>
            </div>
            <div className={styles.imageContainer}>
                <Image src={bilinear_1_side} alt="robot" width={250} className={styles.mobileImage}/>
                <Image src={bilinear_16_side} alt="robot" width={250} className={styles.mobileImage}/>
            </div>
            <div className={styles.imageContainer}>
                <caption>Bilinear with sample_rate 1 and 16</caption>
            </div>
            <p>Based on these images, a higher sampling rate helps create a blurring effect that reduces jaggies no matter which sampling method is used for texture mapping. Bilinear seems to be better at blending nearby texels as we zoom in and creates the illusion of straight lines even without a higher sampling rate. Combining both bilinear sampling and high sampling rate allows us to get smooth and clear details even when zoomed in quite a bit. The tradeoffs are that bilinear sampling takes more time to render. If we have an image with lots of finer detail, bilinear sampling will be able to preserve these details much more than nearest sampling.</p>
            <h4 id="1e">"Level Sampling" with mipmaps for Texture Mapping</h4>
            <p>In level sampling, we add the calculation of samples that represent the downsampled image that we can use to improve the resolution and pick better texture samples that correspond with the amount of aliasing occuring.The modifications in the calculation include calculating derivatives that quantify the difference between texture coordinates that are near each other. In order to make these changes smoother, I used linear interpolation again to smooth out the shifts between mipmap levels. The <code>sample</code> function is modified to allow for both pixel sampling and level sampling to get trilinear texture filtering.</p>
            <p>Now that the sampling technique can be modified using pixel sampling, level sampling, and <code>sample_rate</code>, I've found that the pixel sampling and level sampling take longer to render than changes to <code>sample_rate</code>. Antialiasing seems better with level sampling and supersampling. I think level sampling and pixel sampling work better when we are aiming to have our textures be smoother as we zoom in. Zooming in is definitely the greatest memory usage and speed in terms of having the ability to render everything at a specific framerate.</p>
            <div className={styles.imageContainer}>
                <Image src={zero_nearest} alt="robot" width={250} className={styles.mobileImage}/>
                <Image src={zero_linear} alt="robot" width={250} className={styles.mobileImage}/>
            </div>
            <div className={styles.imageContainer}>
                <caption>[L_ZERO and P_NEAREST] and [L_ZERO and P_LINEAR]</caption>
            </div>
            <div className={styles.imageContainer}>
                <Image src={nearest_nearest} alt="robot" width={250} className={styles.mobileImage}/>
                <Image src={nearest_linear} alt="robot" width={250} className={styles.mobileImage}/>
            </div>
            <div className={styles.imageContainer}>
                <caption>[L_NEAREST and P_NEAREST] and [L_NEAREST and P_LINEAR]</caption>
            </div>
            <h3 id="2">Mesh Geometry</h3>
            <p>In this homework, the goal was to implement a geometric modeling techniques. I was able to implement the topics we had learnt in class including Bezier curves and practice half edge mesh representations throughout this homework. The most interesting part (and challenging) was understanding and correctly using the half edge mesh representation. I found that drawing images of before and after and writing out the pointers before coding to be helpful for this. I've had previous experience doing modeling in Maya so it was really cool to see the math and look at what happens to each triangle when you add subdivisions or box model.</p>
            <h4 id="2a">Bezier Curves with 1D de Casteljau Subdivision</h4>
            <p>De Casteljau's algorithm works by using recursive linear interpolation to evaluate points on Bezier curves. Linear interpolation works by computing the control points at the previous level, based on <code>t</code>. Given an original <code>n</code> points, we evaluate <code>n - 1</code> points to get a new set of points. We recursively repeat this until we get a final point.</p>
            <div className={styles.imageContainer}>
                <Image src={e0} alt="robot" width={200} className={styles.mobileImage}/>
                <Image src={e1} alt="robot" width={200} className={styles.mobileImage}/>
                <Image src={e2} alt="robot" width={200} className={styles.mobileImage}/>
            </div>
            <div className={styles.imageContainer}>
                <caption>step 1, step 2, step 3</caption>
            </div>
            <div className={styles.imageContainer}>
                <Image src={e3} alt="robot" width={200} className={styles.mobileImage}/>
                <Image src={e4} alt="robot" width={200} className={styles.mobileImage}/>
                <Image src={e5} alt="robot" width={200} className={styles.mobileImage}/>
            </div>
            <div className={styles.imageContainer}>
                <caption>step 3, step 4, step 5</caption>
            </div>
            <div className={styles.imageContainer}>
                <Image src={c1} alt="robot" width={200} className={styles.mobileImage}/>
                <Image src={c2} alt="robot" width={200} className={styles.mobileImage}/>
            </div>
            <div className={styles.imageContainer}>
                <caption>modifying parameter <code>t</code></caption>
            </div>
            <h4 id="2b">Bezier Curves with Seperable 1D de Casteljau</h4>
            <p>First, I extend de Casteljau to Bezier surfaces by first calculating the <code>evaluateStep</code> on 3D points instead of 2D points. I then implemented the <code>evaluate1D</code> function by recursively calling <code>evaluateStep</code> for all n points and returning the final point. Finally, the <code>evaluate</code> function first evaluates <code>n</code> vectors using <code>u</code> as our parameter for <code>t</code>. Then, I evaluate these vectors in another axis using <code>v</code> as our parameter, which returns our final point. Ultimately, we extend to one more dimension to compute Bezier surfaces.</p>
            <div className={styles.imageContainer}>
                <Image src={teapot} alt="robot" width={250} className={styles.mobileImage}/>
                <Image src={teapot_gray} alt="robot" width={250} className={styles.mobileImage}/>
            </div>
            <div className={styles.imageContainer}>
                <caption>🫖 teapot!</caption>
            </div>
            <h4 id="2c">Area-Weighted Vertex Normals</h4>
            <p>In order have cleaner Phong shading, we calculate area-weighted vertex normals for each face. In order to do this, I first found all vertices for a specific face. To find the normal vector to this face, I took the cross product of two perpendicular vectors and made sure that the normal was pointing outwards. Finally, I summed all the normals across all of the faces and returned the normalized output. Since I'm not modifying any halfedges, I also made sure to use <code>HalfEdgeCIter.</code></p>
            <div className={styles.imageContainer}>
                <Image src={flat} alt="robot" width={250} className={styles.mobileImage}/>
                <Image src={phong} alt="robot" width={250} className={styles.mobileImage}/>
            </div>
            <div className={styles.imageContainer}>
                <caption>flat shading / phong shading using normals</caption>
            </div>
            <h4 id="2d">Edge Flip</h4>
            <div className={styles.imageContainer}>
                <Image src={edge_flip} alt="robot" width={450} className={styles.mobileImage}/>
            </div>
            <p>In order to implement the edge flip algorithm, I first drew out this picture above and then wrote out all the pointers that changed throughout the flip and updated them accordingly in the code. Since edge flip doesn't require adding elements or deleting them, I found the implementation pretty straightforward and didn't face any bugs. I realized after completing this that a few operations and assignments could be simplified and accordinly updated that in my edge split implementation.</p>
            <div className={styles.imageContainer}>
                <Image src={edgeflip1} alt="robot" width={250} className={styles.mobileImage}/>
                <Image src={edgeflip2} alt="robot" width={250} className={styles.mobileImage}/>
            </div>
            <h4 id="2e">Edge Split</h4>
            <p>To implement, edge split I followed similar steps as edge flip but also added in a new vertex, two additional faces, and new halfedges and edges. I found the <code>setNeighbors</code>function to be quite useful here in order to update all of the pointers of one halfedge at once. Initially, I found no issues with my edge split function but when completing upsampling (below) I realized that a few halfedges were being modified incorrectly which allowed me to fix my implementation. I also added support for labeling the new vertices and edges with <code>isNew = true</code> in the edge split function so that when I edge split in <code>unsample</code> method only the new edges will be flipped.</p>
            <div className={styles.imageContainer}>
                <Image src={split} alt="robot" width={250} className={styles.mobileImage}/>
                <Image src={splitflip} alt="robot" width={250} className={styles.mobileImage}/>
            </div>
            <div className={styles.imageContainer}>
                <caption>edge split / edge split and flip</caption>
            </div>
            <h4 id="2f">Loop Subdivision for Mesh Upsampling</h4>
            <p>I implemented loop subdivision by following the guidelines in the code. I started off by calculating and saving the new positions of the vertices to be updated in the future, using the equation <code>(1 - n * u) * v-{'>'}position + u * neighborPositionSum</code>. I then computed the vertex position of a current edge using the values of the vertices sharing an edge and the equation <code>(3.0 / 8.0) * (A-{'>'}position + B-{'>'}position) + (1.0 / 8.0) * (C-{'>'}position + D-{'>'}position)</code>. I also saved a list of <code>originalEdges</code> during this process so that I could split only the mesh edges that were from the original mesh in order to not run in an infinite loop. Here, I updated my <code>edgeSplit</code> function to mark new edges as new so that I wouldn't overflip edges. I then flipped edges based on whether it was connecting an old and new vertex and if it was a new edge. Finally, I updated the position of all the vertices.</p>
            <p>As we can see below, the mesh looks nothing like a cube as we increase subdivisions. We achieve a more spherical shape over time but not truly spherical as it maintains part of its squareness.</p>
            <div className={styles.imageContainer}>
                <Image src={lvl0} alt="robot" width={150} className={styles.mobileImage}/>
                <Image src={lvl1} alt="robot" width={150} className={styles.mobileImage}/>
                <Image src={lvl2} alt="robot" width={150} className={styles.mobileImage}/>
                <Image src={lvl3} alt="robot" width={150} className={styles.mobileImage}/>
            </div>
            <div className={styles.imageContainer}>
                <caption>level 0 / level 1 / level 2 / level 3</caption>
            </div>
            <div className={styles.imageContainer}>
                <Image src={lvl4} alt="robot" width={150} className={styles.mobileImage}/>
                <Image src={lvl5} alt="robot" width={150} className={styles.mobileImage}/>
                <Image src={lvl6} alt="robot" width={150} className={styles.mobileImage}/>
                <Image src={lvl7} alt="robot" width={150} className={styles.mobileImage}/>
            </div>
            <div className={styles.imageContainer}>
                <caption>level 4 / level 5 / level 6 / level 7</caption>
            </div>
            <p>By pre-splitting edges, we are able to reduce the sharp corners and maintain the shape of the original image. As we can see below, presplitting only one face keeps the flatness preserved while increasing subdivisions. This preprocessing helps because it creates more edges that can be subdivided which means we make even more edges when we flip, essentially adding more detail at each level.</p>
            <div className={styles.imageContainer}>
                <Image src={presplit} alt="robot" width={120} className={styles.mobileImage}/>
                <Image src={presplit1} alt="robot" width={120} className={styles.mobileImage}/>
                <Image src={presplit2} alt="robot" width={120} className={styles.mobileImage}/>
                <Image src={presplit3} alt="robot" width={120} className={styles.mobileImage}/>
                <Image src={presplit4} alt="robot" width={120} className={styles.mobileImage}/>
            </div>
            <div className={styles.imageContainer}>
                <caption>presplit / level 1 / level 2 / level 3 / yam 🍠</caption>
            </div>
            <p>The usefulness of loop subdivision can be seen on the teapot and the cow which achieves a less geometric look and reduces sharp corners using these operations.</p>
            <div className={styles.imageContainer}>
                <Image src={tea0} alt="robot" width={150} className={styles.mobileImage}/>
                <Image src={tea1} alt="robot" width={150} className={styles.mobileImage}/>
                <Image src={cow0} alt="robot" width={150} className={styles.mobileImage}/>
                <Image src={cow1} alt="robot" width={150} className={styles.mobileImage}/>
            </div>
            <div className={styles.imageContainer}>
                <caption>teapot before / teapot after / cow before / cow after </caption>
            </div>
            <p>Coding up loop subdivision took a bit longer than the other parts due to some pointer bugs and keeping track of which halfedges were new, which led to some crumpled meshes during the debugging:</p>
            <div className={styles.imageContainer}>
                <Image src={crumpled1} alt="robot" width={100} className={styles.mobileImage}/>
                <Image src={crumpled2} alt="robot" width={100} className={styles.mobileImage}/>
                <Image src={crumpled3} alt="robot" width={100} className={styles.mobileImage}/>
                <Image src={crumpled4} alt="robot" width={100} className={styles.mobileImage}/>
                <Image src={crumpled5} alt="robot" width={100} className={styles.mobileImage}/>
                <Image src={crumpled6} alt="robot" width={100} className={styles.mobileImage}/>
            </div>
            <h3 id="3">Ray Tracing</h3>
            <h4 id="3a">Ray Generation and Scene Intersection</h4>
            <h4 id="3b">Bounding Volume Hierarchy</h4>
            <h4 id="3c">Direct Illumination</h4>
            <h4 id="3d">Global Illumination</h4>
            <h4 id="3e">Adaptive Sampling</h4>
            <h3 id="4">Animation</h3>
            <h4 id="4a">Masses and Springs</h4>
            <h4 id="4b">Simulation via Numerical Integration</h4>
            <h4 id="4c">Handling Collisions</h4>
            <h4 id="4d">Handling Self-Collisions</h4>
            <h4 id="4e">Shaders</h4>
        </div>
    </Layout>
</>
);
}