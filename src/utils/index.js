export function createPageUrl(name) {
  switch (name) {
    case "Home":
      return "/";
    case "Education":
      return "/education";
    case "Progress":
      return "/progress";
    case "Scholarships":
      return "/scholarships";
    case "Resources":
      return "/resources";
    case "Help":
      return "/help";
    default:
      return "/";
  }
}
