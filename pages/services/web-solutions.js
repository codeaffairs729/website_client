import TechComponent from '../../components/techComponent'
import HireServiceLayout from '../../components/HireServiceLayout'
import Banner from '../../components/banner'
import Head from 'next/head'
const techTitle = 'Web Solutions'
import ScheduleForm from '../../components/schedule'
import Image from 'next/image'
import styles from '../../styles/Services.module.css'
import hireService from '../../styles/hireService.module.css'

// const contentHeader=()=><div></div>
const contentHeader1 = () => {
  return (
    <>
      <div className={` feature-list container ${hireService.techservicebody}`}>
        <div className={hireService.techservicebodyleft}>
          <h6>Services</h6>
          <div className={` mt-5 ${hireService.hireh1}`}>{techTitle}</div>
          <div className={hireService.hireh8}>
            Discover our suite of web services designed to enhance your digital
            success. From web design to hosting, we're your partners in building
            a powerful online presence. Explore our solutions and unlock your
            digital potential.
          </div>
          {/* <span className="d-flex margine-bottom-16px">
            <Image
              src="/icons/service-icon/check-broken.svg"
              alt="check-broken png"
              width={24}
              height={24}
            />
            <p className="margine-left-8px">
              We built fully-functional website
            </p>
          </span>
          <span className="d-flex margine-bottom-16px">
            <Image
              src="/icons/service-icon/check-broken.svg"
              alt="check-broken png"
              width={24}
              height={24}
            />
            <p className="margine-left-8px">
              We develop Highly interactive website
            </p>
          </span>
          <span className="d-flex margine-bottom-16px">
            <Image
              src="/icons/service-icon/check-broken.svg"
              alt="check-broken png"
              width={24}
              height={24}
            />
            <p className="margine-left-8px">
              We always keep things on the right track
            </p>
          </span>
          <span className="d-flex margine-bottom-16px">
            <Image
              src="/icons/service-icon/check-broken.svg"
              alt="check-broken png"
              width={24}
              height={24}
            />
            <p className="margine-left-8px">
              We offer easy-to-customize websites.
            </p>
          </span> */}
        </div>
        <div className={hireService.servicecloud}>
          <Image
            src="/blogs/blogcloud.png"
            alt="blogimage"
            height={119.36}
            width={162}
          />
        </div>
        <div className={hireService.mobileservicebodyright}>
          {/* <img src="/icons/service-icon/Frame.webp" alt="" /> */}

          <Image
            src="/icons/service-icon/websolutions.png"
            alt="Frame JPG"
            width={1363}
            height={1150}
            priority={true}
            objectFit="cover"
          />
          <div className={hireService.mouse}>
            <Image
              src="/icons/service-icon/mouse.png"
              alt="Frame JPG"
              width={55.02}
              height={59.67}
              priority={true}
              objectFit="cover"
            />
          </div>
          <div className={hireService.sphere}>
            <Image
              src="/icons/service-icon/Sphere.png"
              alt="Frame JPG"
              width={16}
              height={16}
              priority={true}
              objectFit="cover"
            />
          </div>
          <div className={hireService.servicecloud2}>
            <Image
              src="/blogs/blogcloud.png"
              alt="blogimage"
              height={64.75}
              width={94.61}
            />
          </div>
          <div className={hireService.cube}>
            <Image
              src="/icons/service-icon/Cube.png"
              alt="blogimage"
              height={40.65}
              width={43.85}
            />
          </div>
        </div>
      </div>
    </>
  )
}

const content1 = () => {
  return (
    <>
      {/* Service container body content */}
      <div className="hire-container-body-left-content-1">
        <p className={hireService.hirep}>
          At Code Garage Tech, we take pride in offering comprehensive web
          development services that encompass the entire journey, from initial
          planning to final delivery, including third-party testing. With a
          dedicated and highly skilled team of developers, we have solidified
          our position as one of the most respected and trusted custom website
          development companies in the industry. We collaborate closely with our
          clients to address even their most challenging requirements for
          professional website application development, providing cost-effective
          end-to-end solutions. <br />
          <br />
          Our primary objective is to deliver web solutions that align perfectly
          with your business needs. We focus on creating websites that are not
          only easy to customize but also user-friendly, responsive, highly
          secure, and stable. Our unwavering commitment to excellence ensures
          that your ideal website maintains a top-notch web presence. We
          genuinely care about your needs, and that's why we offer comprehensive
          web development solutions that cover all aspects of your project. With
          Code Garage Tech, your web development journey is in capable hands,
          backed by our team's expertise and dedication.
          <br />
          <br />
        </p>
        {/* content 7 */}
        {/* <h2 className={hireService.hireh2}>
          Our Web Development Step-By-Step Process
        </h2> */}
        <div className={`${styles.services_image_container}`}>
          <Image
            src="/services_images/web_development.png"
            alt="digital marketing"
            width={800}
            height={800}
            priority={true}
            objectFit="contain"
          />
        </div>
        <h2 className={`${hireService.hireh2} ${hireService.marginbottom8}`}>
          {/* <h2 className="hire-h2 margin-bottom-8"> */}
          Technologies We Excel At:
        </h2>
        <div
          id="ruby-rails"
          className={`d-flex align-items-center ${hireService.margintop32px}`}
          // className="d-flex align-items-center margin-top-32px"
        >
          <div className={hireService.headingicon}>
            <Image
              src="/icons/rails.webp"
              alt="React Native png"
              width={45}
              height={45}
            />
          </div>
          <h3 className={hireService.hireicontext}>
            Ruby on Rails Development
          </h3>
        </div>
        <p className={`${hireService.hirep} ${hireService.marginbottom24px}`}>
          Our deliberate choice of the Ruby on Rails framework for web
          development stems from our profound understanding of how to harness
          its full potential. We've amassed a wealth of expertise in crafting
          Ruby on Rails web applications across a broad spectrum of sizes and
          complexities. <br />
          <br />
          Our seasoned developers possess an in-depth understanding of the Ruby
          on Rails framework, enabling them to adeptly tackle even the most
          intricate tasks. We are committed to infusing cutting-edge market
          techniques and insights into our projects, resulting in the creation
          of robust and dynamic Ruby on Rails applications
        </p>
        <h3 className={hireService.hireh3}>
          Our comprehensive suite of Ruby on Rails Development Services
          encompasses:
        </h3>{' '}
        <br />
        <br />
        <ul
          className={`${hireService.hirelist} ${hireService.marginbottom24px}`}
        >
          {/* <ul className="hire-list margin-bottom-24px"> */}
          <li>
            <b>Enterprise Modernization:</b> We help businesses modernize their
            operations by leveraging the power of Ruby on Rails to transform
            legacy systems into agile, efficient, and scalable solutions.{' '}
          </li>
          <br />
          <li>
            <b>Rails Application Migration:</b> Our expertise extends to
            seamlessly migrating your existing applications to the Ruby on Rails
            framework, ensuring a smooth transition with minimal disruption.
          </li>
          <br />
          <li>
            <b>Legacy Code Audit:</b> We conduct thorough code audits to
            identify areas for improvement and optimization, ensuring that your
            Ruby on Rails applications are efficient and maintainable.
          </li>
          <br />
          <li>
            <b>Startup Solutions:</b> We cater to startups by providing tailored
            Ruby on Rails solutions that accelerate product development and
            enhance scalability.
          </li>
          <br />
          <li>
            <b>Maintenance and Support:</b> Our commitment doesn't end at
            project delivery; we offer ongoing maintenance and support services
            to ensure the long-term success and reliability of your Ruby on
            Rails applications.{' '}
          </li>
          <br />
          <li>
            <b>Third-Party Integration:</b> We seamlessly integrate third-party
            services and APIs into your Ruby on Rails applications to enhance
            functionality and connectivity.
          </li>
          <br />
          <li>
            <b>Payment Gateway:</b> Our expertise includes integrating secure
            and reliable payment gateways into your applications, facilitating
            smooth and secure transactions.
          </li>
          <br />
          <li>
            <b>Custom API development:</b> We specialize in developing custom
            APIs tailored to your specific needs, enabling seamless data
            exchange and integration with external systems.
          </li>
          <br />
        </ul>
        <p className={`${hireService.hirep} ${hireService.marginbottom24px}`}>
          At Code Garage Tech, we don't just build Ruby on Rails applications;
          we empower businesses with solutions that are not only technologically
          advanced but also strategically aligned with their goals. Our
          dedication to excellence and our commitment to staying at the
          forefront of industry trends ensure that we consistently deliver
          high-quality Ruby on Rails applications that drive success <br />
        </p>
        <div
          id="react-nextjs"
          className={`d-flex align-items-center ${hireService.margintop32px}`}
          // className="d-flex align-items-center margin-top-32px"
        >
          <div className={hireService.headingicon}>
            <Image
              src="/icons/react_native.webp"
              alt="React Native png"
              width={45}
              height={45}
            />
          </div>
          <h3 className={hireService.hireicontext}>
            ReactJs Development / NextJs Development
          </h3>
        </div>
        <p className={`${hireService.hirep}  ${hireService.marginbottom24px}`}>
          Our preference for React/Next.js Development is rooted in its dynamic
          and flexible nature, making it an ideal framework for web and mobile
          app development. What sets React/Next.js apart is its ability to
          enable the creation of both web and mobile applications using a single
          codebase.
          <br />
          <br />
          Our team at Code Garage Tech fully harnesses the inherent power of
          React/Next.js to craft fully functional websites and applications that
          are meticulously tailored to your unique business needs. Whether it's
          the rapid development of dynamic and static sites or the creation of
          feature-rich, robust web applications, the benefits of choosing
          React/Next.js are abundant, benefiting both developers and clients
          alike.
        </p>
        <h3 className={hireService.hireh3}>
          When you opt for Next.js development services, you unlock a plethora
          of advantages, including:{' '}
        </h3>
        <br></br>
        <ul
          className={`${hireService.hirelist} ${hireService.marginbottom24px}`}
        >
          {' '}
          <br />
          <li>
            <b>Multiple Rendering Capabilities:</b> Next.js offers various
            rendering options, allowing you to choose the most suitable method
            for your specific project, whether it's server-side rendering,
            static site generation, or client-side rendering.
          </li>
          <br />
          <li>
            <b>Internationalization Routing:</b> With built-in
            internationalization support, Next.js simplifies the process of
            creating multilingual websites, enhancing the accessibility of your
            content to a global audience.
          </li>
          <br />
          <li>
            <b>Auto Code Splitting:</b> Next.js automatically splits your code
            into smaller, more manageable chunks, optimizing loading times and
            improving overall performance.
          </li>{' '}
          <br />
          <li>
            <b>TypeScript Support:</b> Benefit from the robustness and type
            safety of TypeScript, which seamlessly integrates with Next.js for
            enhanced development efficiency and code quality
          </li>{' '}
          <br />
          <li>
            <b>Component Reusability:</b> Leveraging React's component-based
            architecture, Next.js promotes code reusability, streamlining
            development and maintenance efforts.
          </li>{' '}
          <br />
          <li>
            <b>Built-in CSS Support:</b> Next.js provides built-in support for
            styling your applications with CSS, making it convenient to manage
            your styles within the project.
          </li>{' '}
          <br />
          <li>
            <b>Image Optimization:</b> Enjoy automatic image optimization,
            ensuring that your web applications are optimized for performance
            without sacrificing visual quality.
          </li>{' '}
          <br />
          <li>
            <b>Improved SEO:</b> Next.js excels in search engine optimization,
            facilitating better discoverability of your web content and
            improving your site's search engine ranking.
          </li>
        </ul>
        <p className={`${hireService.hirep} ${hireService.marginbottom24px}`}>
          Choosing React/Next.js for your web and mobile application development
          endeavors means embracing a framework that combines versatility,
          performance, and developer-friendly features. At Code Garage Tech, we
          leverage these advantages to create solutions that not only meet your
          current requirements but also position you for future success in the
          digital landscape.
          <br />
        </p>
        <div
          id="vuejs"
          className={`d-flex align-items-center ${hireService.margintop32px}`}
        >
          <div className={hireService.headingicon}>
            <Image
              src="/icons/vuejs.webp"
              alt="React Native png"
              width={45}
              height={45}
            />
          </div>
          <h3 className={hireService.hireicontext}>
            VueJs Development/ NuxtJs Development
          </h3>
        </div>
        <p className={`${hireService.hirep}  ${hireService.marginbottom24px}`}>
          We wholeheartedly embrace Vue.js/Nuxt.js Development, recognizing it
          as an adaptable, scalable, and responsive web application framework
          that lays the foundation for functional, aesthetically pleasing, and
          lightning-fast front-end experiences. <br />
          <br />
          Our dedicated team at Code Garage Tech not only harnesses the full
          potential of Vue.js/Nuxt.js Development but also adheres rigorously to
          industry-standard development practices, ensuring the delivery of
          top-tier web applications that align with your specific needs.
          <br />
          <br />
        </p>
        <h3 className={hireService.hireh3}>
          Here's why Vue.js/Nuxt.js Development services should be your choice:{' '}
        </h3>{' '}
        <br />
        <ul
          className={`${hireService.hirelist} ${hireService.marginbottom24px}`}
        >
          <li>
            <b>Performance Boost:</b> Vue.js and Nuxt.js are renowned for their
            performance optimization capabilities. They enable the creation of
            highly responsive and snappy user interfaces, enhancing the overall
            user experience.
          </li>{' '}
          <br />
          <li>
            <b>Easy of Deployment and Use:</b> Vue.js/Nuxt.js simplifies the
            deployment process, making it convenient for developers to launch
            and manage web applications efficiently. Its user-friendly syntax
            streamlines the development workflow, reducing development time and
            effort.
          </li>{' '}
          <br />
          <li>
            <b>Automatic Code Splitting:</b> Vue.js/Nuxt.js comes with built-in
            automatic code splitting, ensuring that only the necessary code is
            loaded for each specific page, thereby improving load times and
            overall performance.
          </li>{' '}
          <br />
          <li>
            <b>High Compatibility:</b> Vue.js/Nuxt.js boasts high compatibility
            with various platforms and libraries, making it a versatile choice
            for a wide range of projects. It can be seamlessly integrated with
            existing systems and technologies.
          </li>{' '}
          <br />
        </ul>
        <p className={`${hireService.hirep} ${hireService.marginbottom24px}`}>
          Choosing Vue.js/Nuxt.js Development means embracing a framework that
          not only empowers you to deliver high-performance, responsive web
          applications but also streamlines development processes. At Code
          Garage Tech, we leverage these advantages to create web solutions that
          not only meet your immediate needs but also position you for success
          in an ever-evolving digital landscape.
          <br />
        </p>
        <div
          id="nodejs"
          className={`d-flex align-items-center ${hireService.margintop32px}`}
        >
          <div className={hireService.headingicon}>
            <Image
              src="/icons/nodejs.webp"
              alt="React Native png"
              width={45}
              height={45}
            />
          </div>
          <h3 className={hireService.hireicontext}>NodeJs Development</h3>
        </div>
        <p className={`${hireService.hirep}  ${hireService.marginbottom24px}`}>
          As a leading Node.js development company, Code Garage Tech stands at
          the forefront of creating scalable, real-time, and high-performance
          applications. When you choose to partner with us, you gain access to a
          team of adept and dedicated developers who are poised to meet and
          exceed your Node.js web development requirements. <br />
          <br />
          At Code Garage Tech, our Node.js web development services are
          meticulously designed to enhance efficiency on both the client side
          and server side of your applications. Our developers leverage the
          power of asynchronous and event-driven APIs, enabling the creation of
          real-time mobile, desktop, and web applications that deliver seamless
          user experiences.
        </p>
        <h3 className={hireService.hireh3}>
          Our comprehensive Node.js Development Services are characterized by{' '}
        </h3>{' '}
        <br />
        <ul
          className={`${hireService.hirelist} ${hireService.marginbottom24px}`}
        >
          <li>
            <b>100% Transparency:</b> We believe in building trust with our
            clients through transparency at every step of the development
            process. You'll have full visibility into the progress of your
            project.
          </li>{' '}
          <br />
          <li>
            <b>Flexible-Engagement-Models:</b> We understand that every project
            is unique, and we offer flexible engagement models to tailor our
            services to your specific needs and preferences.
          </li>{' '}
          <br />
          <li>
            <b>Timely Delivery:</b> We prioritize delivering your project on
            time, ensuring that you can launch your Node.js applications
            promptly and start reaping the benefits of your investment
          </li>{' '}
          <br />
          <li>
            <b>Experienced Developers:</b> Our team of developers brings a
            wealth of experience and expertise to the table, guaranteeing that
            your Node.js applications are built to the highest standards.
          </li>{' '}
          <br />
          <li>
            <b>Technical Support:</b> Our commitment to your success doesn't end
            with project delivery. We provide ongoing technical support to
            ensure the continued reliability and performance of your Node.js
            applications.
          </li>
        </ul>
        <p className={`${hireService.hirep} ${hireService.marginbottom24px}`}>
          Partnering with Code Garage Tech for your Node.js web development
          needs means gaining a trusted ally that is dedicated to helping you
          leverage the full potential of Node.js for your applications. We
          combine technical prowess with a client-centric approach to deliver
          solutions that not only meet your immediate requirements but also
          position you for long-term success in a dynamic digital landscape.
          <br />
        </p>
        <div
          id="laravel"
          className={`d-flex align-items-center ${hireService.margintop32px}`}
          // className="d-flex align-items-center margin-top-32px"
        >
          <div className={hireService.headingicon}>
            <Image
              src="/icons/laravel.webp"
              alt="React Native png"
              width={45}
              height={45}
            />
          </div>
          <h3 className={hireService.hireicontext}>Laravel Development</h3>
        </div>
        <p className={`${hireService.hirep}  ${hireService.marginbottom24px}`}>
          As a premier Laravel development company, we take pride in offering
          avant-garde services designed to catapult your business to new heights
          of success. Our Laravel development solutions are tailor-made to
          accommodate businesses of all sizes and aspirations <br />
          <br />
          At Code Garage Tech, our wealth of experience in development services
          spans several years, and we excel in seamlessly executing integration
          processes and customizations when crafting Laravel applications. We
          are dedicated to helping you harness the full potential of Laravel for
          your business.
        </p>
        <h3 className={hireService.hireh3}>
          Our expansive range of Laravel Development Services encompasses:
        </h3>{' '}
        <br />
        <ul
          className={`${hireService.hirelist} ${hireService.marginbottom24px}`}
        >
          <li>
            <b>Customized Laravel Development Services:</b> We specialize in
            creating bespoke Laravel applications that align perfectly with your
            unique business requirements, providing tailored solutions that
            stand out in a competitive market.
          </li>{' '}
          <br />
          <li>
            <b>Third-Party Integrations:</b> We seamlessly integrate third-party
            services and APIs into your Laravel applications to enhance
            functionality, connectivity, and user experience.
          </li>{' '}
          <br />
          <li>
            <b>Laravel Enterprise Solutions:</b> Our enterprise-grade Laravel
            solutions are designed to meet the demands of large-scale
            businesses, ensuring robustness, scalability, and security.
          </li>{' '}
          <br />
          <li>
            <b>Laravel Data Migration Solutions:</b> We offer comprehensive data
            migration services to facilitate a smooth transition to Laravel,
            ensuring the integrity and accessibility of your data.
          </li>{' '}
          <br />
          <li>
            <b>Laravel E-Commerce Development Solutions:</b> Leverage the power
            of Laravel for e-commerce solutions that drive sales and enhance
            customer experiences, with features like secure payment gateways and
            responsive design.
          </li>{' '}
          <br />
          <li>
            <b>Laravel CRM Development:</b> Streamline customer relationship
            management with our Laravel CRM solutions, empowering your business
            to better connect with clients and optimize operations.
          </li>{' '}
          <br />
          <li>
            <b>Laravel Extension Development:</b> Enhance the functionality of
            your Laravel applications with custom extensions and plugins that
            cater to your specific needs.
          </li>
        </ul>
        <p className={`${hireService.hirep} ${hireService.marginbottom24px}`}>
          Choosing Code Garage Tech for your Laravel development needs means
          entrusting your project to a team of experts who are dedicated to
          delivering cutting-edge solutions. We blend innovation with a
          client-focused approach to ensure that our services not only meet your
          immediate goals but also position your business for long-term success
          in a rapidly evolving digital landscape.
          <br />
        </p>
        <div
          id="shopify"
          className={`d-flex align-items-center ${hireService.margintop32px}`}
        >
          <div className={hireService.headingicon}>
            <Image
              src="/images/shopify_icon.webp"
              alt="React Native png"
              width={45}
              height={45}
            />
          </div>
          <h3 className={hireService.hireicontext}>Shopify Development </h3>
        </div>
        <p className={`${hireService.hirep}  ${hireService.marginbottom24px}`}>
          As a leading development company, we take immense pride in offering an
          extensive array of Shopify services that are strategically designed to
          assist you in creating a scalable, robust, highly secure, and
          sales-focused Shopify store. <br />
          <br />
          At Code Garage Tech, we are committed to delivering dependable Shopify
          services that are finely tuned to help you reach and exceed your
          business growth objectives.Our primary objective is to infuse
          experience, dedication, and expertise into every facet of our
          solutions to ensure your Shopify venture is a resounding success.
        </p>
        <h3 className={hireService.hireh3}>
          Our comprehensive suite of Shopify Development Services encompasses:
        </h3>{' '}
        <br />
        <ul
          className={`${hireService.hirelist} ${hireService.marginbottom24px}`}
        >
          <li>
            <b>Shopify Theme Design and Customization:</b> We specialize in
            crafting visually appealing and functionally sound Shopify themes,
            tailored to match your brand identity and customer preferences.
          </li>{' '}
          <br />
          <li>
            <b>Shopify Integration:</b> Seamlessly integrate third-party
            services and applications into your Shopify store to enhance
            functionality, streamline processes, and offer a superior shopping
            experience
          </li>{' '}
          <br />
          <li>
            <b>Shopify Setup and Configuration:</b> Let us handle the intricate
            setup and configuration of your Shopify store, ensuring it is
            optimized for peak performance from the get-go.
          </li>{' '}
          <br />
          <li>
            <b>Shopify Migration:</b> Entrust us with the complex task of
            migrating your existing e-commerce platform to Shopify, ensuring a
            smooth transition without data loss or disruptions.
          </li>{' '}
          <br />
          <li>
            <b>Shopify SEO:</b> Improve the discoverability and ranking of your
            Shopify store in search engines with our comprehensive SEO
            strategies and optimizations.
          </li>{' '}
          <br />
          <li>
            <b>Shopify App Development:</b> Enhance your Shopify store's
            functionality with custom app development tailored to your specific
            needs
          </li>{' '}
          <br />
          <li>
            <b>Shopify Maintenance and Support:</b> Our commitment extends
            beyond project delivery. We provide ongoing maintenance and support
            services to ensure the sustained success and reliability of your
            Shopify store.
          </li>
        </ul>
        <p className={`${hireService.hirep} ${hireService.marginbottom24px}`}>
          Choosing Code Garage Tech as your Shopify development partner means
          entrusting your e-commerce venture to a team of experts who are deeply
          dedicated to delivering top-notch solutions. We combine innovation
          with a client-centric approach to ensure that our services not only
          meet your immediate goals but also position your business for enduring
          success in the highly competitive e-commerce landscape.
          <br />
        </p>
        <div
          id="wordpress"
          className={`d-flex align-items-center ${hireService.margintop32px}`}
        >
          <div className={hireService.headingicon}>
            <Image
              src="/icons/wordpress.webp"
              alt="React Native png"
              width={45}
              height={45}
            />
          </div>
          <h3 className={hireService.hireicontext}>WordPress Development </h3>
        </div>
        <p className={`${hireService.hirep}  ${hireService.marginbottom24px}`}>
          WordPress stands as one of the most potent and user-friendly Content
          Management Systems, boasting a multitude of features that enhance your
          online experience, making it both captivating and delightful.
          <br />
          <br />
          At Code Garage Tech, we are committed to pushing the boundaries of
          what WordPress can achieve, consistently delivering innovative website
          solutions. Our seasoned team is dedicated to crafting high-performance
          digital experiences that propel your business to unprecedented heights
          of success through cutting-edge WordPress Development Solutions.
        </p>
        <h3 className={hireService.hireh3}>
          Our comprehensive suite of WordPress Development Services includes:{' '}
        </h3>{' '}
        <br />
        <ul
          className={`${hireService.hirelist} ${hireService.marginbottom24px}`}
        >
          <li>
            <b>WordPress SEO:</b> Elevate your online visibility and reach with
            our expert WordPress SEO services, ensuring that your website ranks
            prominently in search engine results.
          </li>{' '}
          <br />
          <li>
            <b>WordPress Design:</b> Immerse your audience in a visually
            stunning and user-friendly WordPress design, capturing their
            attention and leaving a lasting impression.
          </li>{' '}
          <br />
          <li>
            <b>WordPress Support:</b> Our dedicated support team is at your
            service, ready to address any WordPress-related issues or questions,
            ensuring the seamless operation of your website.
          </li>{' '}
          <br />
          <li>
            <b>WordPress Customization:</b> Tailor your WordPress website to
            your exact specifications, enhancing its functionality and
            appearance to meet your unique business needs.
          </li>{' '}
          <br />
          <li>
            <b>WordPress Upgradation Services:</b> Keep your WordPress site
            up-to-date with the latest features and security enhancements by
            leveraging our services.
          </li>{' '}
          <br />
          <li>
            <b>WordPress Bug Fixing:</b> Our skilled technicians are adept at
            identifying and resolving any bugs or glitches that may arise,
            ensuring a smooth user experience.
          </li>{' '}
          <br />
          <li>
            <b>WordPress Maintenance and Support:</b> Beyond project completion,
            we provide ongoing maintenance and support services to ensure the
            continued excellence and reliability of your WordPress website.
          </li>
        </ul>
        <p className={`${hireService.hirep} ${hireService.marginbottom24px}`}>
          Choosing Code Garage Tech for your WordPress development needs means
          entrusting your online presence to a team of experts who are dedicated
          to creating exceptional solutions. We infuse innovation and a
          client-centric approach into our services to ensure that your
          WordPress website not only meets your immediate objectives but also
          positions your business for sustained success in the ever-evolving
          digital landscape.
          <br />
        </p>
      </div>
    </>
  )
}

const content7 = () => (
  <>
    <div className={hireService.margintop32px}>
      <TechComponent
        techList={'frontTech'}
        frontActive={true}
        mobileActive={false}
      />
    </div>
  </>
)

// const content6 = () => <TechComponent techList={"frontTech"} />;
const content3 = () => (
  <div className={hireService.formservice}>
    <ScheduleForm
      title={'Schedule a Meeting'}
      requestOrigin={'Request generated from web services page'}
    />
  </div>
)
const WebSolutions = () => {
  return (
    <>
      <Head>
        <title>Effective Web Solutions for your business - Code Garage</title>
        <link
          rel="canonical"
          href="https://codegaragetech.com/services/web-solutions"
        />
        <meta
          name="description"
          content="
          At Code Garage, we offer full web development solutions, from initial planning to final delivery and third-party testing. Get in Touch with us now!"
        />
      </Head>
      <HireServiceLayout
        content1={content1}
        content3={content3}
        // content6={content6}
        isIconExit={true}
        content7={content7}
        contentHeader1={contentHeader1}
        techTitle={techTitle}
        bannerComponent={<Banner techTitle={techTitle} />}
      />
    </>
  )
}

export default WebSolutions
