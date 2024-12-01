#### Laser Cutting

materials safe to laser cut
paper & cardstock, wood, cast acrylic, extruded acrylic, plastic, cotton/felt/hemp, fabric, ceramic, glass (etching only)

raster mode
images are marked/engraved into a material by etching a pattern of dots onto the material, marked in gray

vector mode
laser follows 2D path to cut a shape into a material, marked in **red**, with a stroke of **0.001**

setting up illustrator board
setup your Ilustrator artboard to the exact size of the bed of the laser you’re using (32x18), select color mode RGB and high resolution 300DPI 

to crop images
`Object` > `crop image`, do this before image trace

to raster images
click `image trace` and select from the options, to edit elements, go to `Object` > `Expand`

to remove embed object error
select images, `Window` > `Links`, click on the link icon, choose embed image, or choose from quick actions 

line colors 
- `Red` (255, 0, 0) - cut, 0.001 pts, completely cuts through material 
- `Blue` (0, 0, 255) - engrave/score, 0.001 pts, doesn't cut all the way through but leaves a mark/indentation, defined lines 
- `Black` (0, 0, 0) - raster (0.072 pt), goods for images, grid pattern in order to create a filled in/shaded effect

using the laser system 
load and position material, from adobe illustrator click **print**, open `UCP` (universal control panel), and choose correct settings (measure wood and choose material thickness)

using UCP
- **magnifying glass icon** = shows preview of the job currently selected, can zoom in
- **focus view** = move focus carriage to a desired position on the bed - useful for focusing, as well as testing whether the geometry falls within the material
- **relocate features** = allows you to move the job to the new location on the bed 
- **duplicate** = allows you to duplicate an image in a grid pattern
- **timer** = estimate job amount of time it will take to laser cut

starting the laser cut
close top door, check that fume exhaust is running, compressed air is flowing, click green start button, machine will raster, engrave and then cut last

#### 3D Printing

using Prusa MK32+ with Cura
- `OPEN FILE` to load a model (must be in STL format), keep models in mm 