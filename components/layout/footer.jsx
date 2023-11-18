function Footer(props) {
  return (
    <footer className="container flex flex-col mx-auto md:flex-row md:space-x-0 md:space-y-4">
      {/* Social Menu  */}
      <div className="flex flex-row space-x-4 mx-auto">
        <div class="component-content">
          <a
            href="https://www.facebook.com/HackensackMeridianHealth/"
            class="fa fa-facebook"
            target="_blank"
          ></a>

          <a
            href="https://twitter.com/HMHNewJersey"
            class="fa fa-brands fa-x-twitter"
            target="_blank"
          ></a>
          <a
            href="https://www.youtube.com/channel/UCGNz3pc9coZmYxUuLFJSKtQ"
            class="fa fa-youtube"
            target="_blank"
          ></a>
          <a
            href="https://www.instagram.com/hmhnewjersey/"
            class="fa fa-instagram"
            target="_blank"
          ></a>
          <a
            href="https://www.linkedin.com/company/hackensackmeridianhealth"
            class="fa fa-linkedin"
            target="_blank"
          ></a>
          <a
            href="https://www.threads.net/@hmhnewjersey"
            class="fa fa-brands fa-threads"
            target="_blank"
          ></a>
          <a
            href="https://www.tiktok.com/@hackensackmeridianhealth"
            class="fa fa-brands fa-tiktok"
            target="_blank"
          ></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
