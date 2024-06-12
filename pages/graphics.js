import styles from '../components/layout.module.css';
import Layout from '../components/layout';
import Head from 'next/head';
import Image from 'next/image';

import basic_test4_pixel from '../images/graphics/hw1/basic_test4_pixel.png';

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
                <Image src={basic_test4_pixel} alt="basic_test4_pixel" width={400} className={styles.mobileImage}/>
            </div>
            <h4 id="1b">Antialiasing by Supersampling</h4>
            <p>In this task, I implemented supersampling by updating the <code>sample_buffer</code> data structure and modifying certain algorithms. Supersampling is useful because it allows us to antialias and reduce the jaggies in our images, making pixels seem smoother zoomed out. The modifications I made to the rasterization pipeline was to first change the size of the <code>sample_buffer</code> to include the number of samples we wanted to sample, <code>width * height * sample_rate</code>. Now, each <code>(x, y)</code> pixel will be represented by a sample_rate number of samples that will be averaged in order to downsample to determine the color of the original pixel. I added a new <code>fill_sample</code> function which fills in the color of a specific sample for an <code>(x, y)</code> pixel and updates its color in the sample_buffer by using a new indexing method: <code>sample_buffer[sample_rate * (y * width + x) + s]</code>. I updated the <code>fill_pixel</code> sample to stay consistent for points and lines by calling <code>fill_sample</code> for the number of samples in the pixel, effectively making sure that all samples have the same color. In <code>rasterize_triangle</code>, I now iterated through each sample, rather than pixel to check if we were within bounds, and called <code>fill_sample</code> instead of <code>fill_pixel</code>. Finally, in <code>resolve_to_framebuffer</code>, I updated the frame buffer by getting all samples that corresponded to an <code>(x, y)</code> pixel and averaging the RGB values of all the samples to get the final color, which was then resolved to the framebuffer target.</p>

            {/* <p>https://cal-cs184-student.github.io/hw-webpages-sp24-SadhikaA/</p> */}
            <h3 id="2">Mesh Geometry</h3>
            <h3 id="3">Ray Tracing</h3>
            <h3 id="4">Animation</h3>
        </div>
    </Layout>
</>
);
}