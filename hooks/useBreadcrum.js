import { useEffect, useState } from "react";

const useBreadcrumb = () => {
  const [breadcrumb, setBreadcrumb] = useState([]);

  useEffect(() => {
    const updateBreadcrumb = () => {
      const path = window.location.pathname;
      const segments = path.split("/").filter((segment) => segment !== "");
      const breadcrumbItems = segments.map((segment, index) => {
        const url = `/${segments.slice(0, index + 1).join("/")}`;
        return { label: segment, url };
      });
      setBreadcrumb(breadcrumbItems);
    };

    updateBreadcrumb();

    window.addEventListener("popstate", updateBreadcrumb);

    return () => {
      window.removeEventListener("popstate", updateBreadcrumb);
    };
  }, []);

  return breadcrumb;
};

export default useBreadcrumb;
