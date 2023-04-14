import Image from 'next/image'
const SpeedUp = () => {
  return (
    <>
      <div className="hire-container  blog-page-container ">
        <div className="blog-shades">
          <h1 className="hire-h1">
            A Complete Guide on How to Enhance the Speed of Your Website
          </h1>
          <div className="text-center p-4 border border-2 border-muted">
            {/* <Image src="/images/enhance-speed.webp" width={1060} height={530} /> */}
            <img
              src="/images/enhance-speed.webp"
              alt="enhance-speed-img"
              style={{ width: '1060px' }}
            />
          </div>
          <p className="hire-p">
            <br />
            <br />
            When we talk about a website's performance, page speed is one thing
            that comes to our minds. <br />
            <br />
            Website’s page loading speed has a significant impact on SEO, user
            experience, and conversion rates. Ameliorating website performance
            is pivotal for attracting traffic to site and keeping the website
            visitors engaged. <br />
            <br />
            In this article, we’ll review some of the crucial steps that
            developers can take to make a website faster:
          </p>
          <h3 className="hire-h3">Test Website Performance</h3>
          <p className="hire-p">
            Website speed tests let us know how a site is performing. Testing a
            website on a regular basis can help developers track the performance
            improvements or downgrades. Moreover, a speed test helps developers
            identify certain or all the fields slowing the site performance, and
            also tells about the areas where improvements are required.
          </p>
          <h3 className="hire-h3">Use CDN (Content Delivery Network)</h3>
          <p className="hire-p">
            CDN (Content Delivery Network) helps in escalating the speed of the
            websites through caching content in numerous locations around the
            globe. Content Delivery Network caching servers are generally placed
            closer to the end users than the origin server, or host. Utilizing a
            Content Delivery Network can result in enormous decrease in
            website’s page load times.
          </p>
          <h3 className="hire-h3">Optimize Images</h3>
          <p className="hire-p">
            Images encompass a high percentage of online traffic and they
            usually take a long time to load on a website because image files
            are larger in size as compared to CSS and HTML files. Fortunately,
            image loading time can be reduced with the help of image
            optimization. Optimization of images generally involves certain
            aspects such as compressing the files, reducing the dimensions of
            images, and reducing the resolution.
          </p>
          <h3 className="hire-h3">Minify JavaScript and CSS files</h3>
          <p className="hire-p">
            Minifying the code actually means to remove anything that your
            laptop or PC does not require to understand as well as carry out the
            code, that includes whitespace, unnecessary semicolons, and code
            comments. This makes the JavaScript and CSS files a bit smaller,
            thus they load rapidly in the browser and also use up less
            bandwidth. All in all, minification will only result in minimum
            speed improvements. Nonetheless, implemented correctly along with
            other above-mentioned tips will help in providing you with a better
            website performance.
          </p>
          <h3 className="hire-h3">
            Mitigate the number of HTTP requests if possible
          </h3>
          <p className="hire-p">
            Most of the web pages will need browsers to make numerous HTTP
            requests for varied assets on the web pages, including scripts, CSS
            files, and images. The thing is that numerous web pages will need
            multiple of these requests and each request outcomes in a journey to
            and from the server hosting the resource, which can add to the all
            in all load time for a webpage. In addition, with resources loaded
            from multiple distinct providers, an issue with one of the hosts
            could affect the ability of the webpage to load quickly, or not.
            <br />
            <br />
            Due to these potential problems, the number of assets each page
            requires to load should be kept to a minimum. Plus, a speed test
            will aid in identifying which HTTP requests are taking most of the
            time. In particular, if images are making a page load slowly,
            developers can look for a quicker image hosting option (such as a
            CDN).
          </p>
          <h3 className="hire-h3">Use Browser HTTP Caching</h3>
          <p className="hire-p">
            A browser cache is a kind of temporary storage space where the
            browsers save the copies of static files so they can load recently
            visited webpages swiftly, rather than requiring to request the same
            content again and again. Elements of a site that won't change often
            can be instructed by developers to be cached by browsers.
            Instructions for browser caching directly go to the headers of HTTP
            responses from the hosting server. This significantly mitigates the
            amount of data that the server requires to transfer to the browser,
            reducing load times for users who usually visit certain pages.
          </p>
          <h3 className="hire-h3">Don't Use Redirects, If Possible</h3>
          <p className="hire-p">
            A redirect occurs when visitors of one webpage get forwarded to a
            distinctive page instead. Redirects increase the time it takes for a
            website to load by a few fractions of a second, or even by an entire
            second. Every second counts when building a performance-optimized
            website. Moreover, Redirects are sometimes inevitable, but they
            shouldn't be used until absolutely essential.
          </p>
          <h2 className="hire-h2">And, The Most Effective One: </h2>
          <div className="text-center p-4">
            {/* <Image src="/images/lazy-loading.webp" width={1060} height={530} /> */}
            <img
              src="/images/lazy-loading.webp"
              alt="azy-loading-img"
              style={{ width: '1060px' }}
            />
          </div>
          <h3 className="hire-h3">Lazy Loading Technique</h3>
          <p className="hire-p">
            With the help of lazy loading technique, several parts of a webpage,
            particularly graphics, are loaded only when necessary. Rather than
            loading everything at once, that’s called "eager" loading, the
            browser waits to request some resources until the user interacts in
            a way that the resources are required. Lazy loading can speed up
            page loads when implemented appropriately.
          </p>
          <h2 className="hire-h2">Advantages of lazy loading: </h2>
          <h3 className="hire-h3">Faster Page Loading</h3>
          <p className="hire-p">
            Web Pages having smaller file sizes load swiftly. With the help of
            lazy loading technique, a web page starts out smaller than its
            complete size, hence loads rapidly. Swift web performance has
            umpteen benefits like increased conversion rates, better SEO, and
            improved user experience.
          </p>
          <h3 className="hire-h3">No Extra Content</h3>
          <p className="hire-p">
            Just suppose a page loads several images below the fold, however the
            user leaves the page before scrolling down. In such a scenario, the
            bandwidth utilized to deliver the graphics as well as the time the
            browser took to request and render the images were squandered. In
            contrast, the lazy loading technique makes sure that the graphics
            only load when required. Because less bandwidth is used, this saves
            time as well as processing power, perhaps saving money for the
            website owner.
          </p>
          <h2 className="hire-h2">How To Implement Lazy Loading For Images</h2>
          <p className="hire-p">
            One method to implement lazy loading is to utilize the HTML
            attribute loading in an image tag. Embedding 𝐥𝐨𝐚𝐝𝐢𝐧𝐠="𝐥𝐚𝐳𝐲", tells
            the browser to wait for loading the image until the website visitor
            scrolls close to it.
          </p>
          <br />
          <span className="hire-p fw-bold  shadow-sm p-3 mb-5 bg-light">
            &quot;&lt;𝐢𝐦𝐠 𝐬𝐫𝐜=&quot;𝐞𝐱𝐚𝐦𝐩𝐥𝐞.𝐜𝐨𝐦/𝐢𝐦𝐚𝐠𝐞&quot; 𝐚𝐥𝐭=&quot;𝐞𝐱𝐚𝐦𝐩𝐥𝐞
            𝐢𝐦𝐚𝐠𝐞&quot; 𝐰𝐢𝐝𝐭𝐡=&quot;𝟏𝟎𝟎&quot; 𝐡𝐞𝐢𝐠𝐡𝐭=&quot;𝟏𝟎𝟎&quot;
            𝐥𝐨𝐚𝐝𝐢𝐧𝐠=&quot;𝐥𝐚𝐳𝐲&quot;&gt;&lt;/𝐢𝐦𝐠&gt;&quot;
          </span>
          <br />
          <br />
          <br />
          <p className="hire-p">
            Programming frameworks can be used by web developers to implement
            more advanced lazy loading. Angular is frequently used for this
            purpose. Moreover, Lazy loading is supported by the React JavaScript
            library as well.
          </p>
          <br />
          <p className="hire-p fw-bold">
            Hope you like this article!
            <br />
            <br />
            Do you want a reliable and fast loading website for your business,
            don’t hesitate, contact us now!
          </p>
        </div>
      </div>
    </>
  )
}

export default SpeedUp
