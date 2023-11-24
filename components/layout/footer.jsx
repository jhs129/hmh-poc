import { getDefaultContent } from "./footer.content";
import { getDefaultSocialLinks } from "./footer.content";
import Link from "next/link";

function Footer(props) {
  let navItems;
  if (!props.navigation) {
    navItems = getDefaultContent();
  } else {
    navItems = props.navigation;
  }

  let socialLinks;
  if (!props.socialLinks) {
    socialLinks = getDefaultSocialLinks();
  } else {
    socialLinks = props.socialLinks;
  }

  function getSocialIcons(name) {
    switch (name.toLowerCase) {
      case "facebook":
        return "fa fa-facebook";
      case "twitter":
        return "fa fa-twitter";
      case "youtube":
        return "fa fa-youtube";
      case "instagram":
        return "fa fa-instagram";
      case "linkedin":
        return "fa fa-linkedin";
      case "threads":
        return "fa fa-threads";
      case "tiktok":
        return "fa fa-tiktok";
      default:
        return "fa";
    }
  }

  return (
    <footer className="container flex flex-col mx-auto bg-gray-200 p-4">
      <div id="social-nav" className="flex flex-row space-x-2 py-4 mt-4">
        {socialLinks.links.map((item, index) => (
          <div
            id="level-2"
            className="bg-primaryAccent h-8 w-8 rounded-full"
            key={index}
          >
            <Link
              className={`p-2 text-white hover:text-secondaryDark fa fa-brands fa-${item.network.toLowerCase()}`}
              href={item.src}
            ></Link>
          </div>
        ))}
      </div>
      <div id="non-social-nav" className="flex flex-col md:flex-row md:justify-between">
        {navItems.group.map((group, index) => (
          <div className="mt-6" key={index}>
            {group.level1.map((level1, index2) => (
              <div className="mt-4"key={index2}>
                <h6>{level1.text}</h6>
                <ul>
                  {level1.level2.map((item2, index3) => (
                    <li key={index3}>
                      <Link
                        className="text-xs text-primaryAccent hover:text-secondaryAccent underline"
                        href={item2.src}
                      >
                        {item2.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div id="copyright" className="mt-4 text-xs text-secondaryDark">
        {props?.siteProperties?.copyright ? props.siteProperties.copyright :
        `© 2023 Hackensack Meridian <em>Health</em>, Inc. is a nonprofit,
        tax-exempt charitable organization (tax ID 22-3474145) under Section
        501(c)(3) of the Internal Revenue Code. Donations are tax-deductible as
        allowed by law.`}
      </div>
    </footer>
  );
}

export default Footer;
           
       