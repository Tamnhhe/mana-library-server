/**
 * Greet.js - Provides ASCII art logo and version information for ManaLibrary
 */

const APP_NAME = "ManaLibrary";
const VERSION = "1.0.0"; // Should be synchronized with package.json
const REPO_URL = "https://github.com/vtvinh24/mana-library-server";

/**
 * Returns the ASCII art logo and version information as a string
 * @returns {string} The formatted greeting message
 */
const getGreeting = () => {
  return `
  ╔══════════════════════════════════════════════════════════╗
  ║                                                          ║
  ║   ███╗   ███╗ █████╗ ███╗   ██╗ █████╗                   ║
  ║   ████╗ ████║██╔══██╗████╗  ██║██╔══██╗                  ║
  ║   ██╔████╔██║███████║██╔██╗ ██║███████║                  ║
  ║   ██║╚██╔╝██║██╔══██║██║╚██╗██║██╔══██║                  ║
  ║   ██║ ╚═╝ ██║██║  ██║██║ ╚████║██║  ██║                  ║
  ║   ╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝                  ║
  ║                                                          ║
  ║   ██╗     ██╗██████╗ ██████╗  █████╗ ██████╗ ██╗   ██╗   ║
  ║   ██║     ██║██╔══██╗██╔══██╗██╔══██╗██╔══██╗╚██╗ ██╔╝   ║
  ║   ██║     ██║██████╔╝██████╔╝███████║██████╔╝ ╚████╔╝    ║
  ║   ██║     ██║██╔══██╗██╔══██╗██╔══██║██╔══██╗  ╚██╔╝     ║
  ║   ███████╗██║██████╔╝██║  ██║██║  ██║██║  ██║   ██║      ║
  ║   ╚══════╝╚═╝╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝      ║
  ║                                                          ║
  ║                                                          ║
  ╚══════════════════════════════════════════════════════════╝

  ${APP_NAME} v${VERSION}
  ${REPO_URL}
  
  Knowledge is power! 📚✨
`;
};

/**
 * Prints the greeting message to the console
 */
const showGreeting = () => {
  console.log(getGreeting());
};

module.exports = {
  getGreeting,
  showGreeting,
};
