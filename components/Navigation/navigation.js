import PropTypes from "prop-types";

const navigationLinks = [
  { href: "/", label: "Why CTOQ" },
  { href: "/", label: "Our Solutions" },
  { href: "/", label: "Testimonials" }
];

export default function Navigation({ stateMenu }) {
  return (
    <div className="flex-1 text-center navigation-m">
      <nav className={`${stateMenu ? "block" : "hidden"} lg:block`}>
        <ul className="font-mono text-xs xl:text-sm px-4">
          {navigationLinks.map(({ href, label }, index) => (
            <li
              key={index}
              className="lg:inline-block lg:px-3 hover:bg-gray-200 border-b lg:border-b-0 border-gray-300"
            >
              <a
                className="block py-4 text-black hover:text-webBlue font-semibold text-base pl-4 pr-4"
                href={href}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

Navigation.propTypes = {
  stateMenu: PropTypes.bool.isRequired
};
