import { useNavigate, useSiteData } from 'dumi';
import React from 'react';

const Release = (props) => {
  const { themeConfig } = useSiteData();
  const navigate = useNavigate();
  React.useEffect(() => {
    const redirct = themeConfig?.sidebarEnhance?.['/welcome']?.[2]?.['children']?.[1]?.['children']?.[0];
    navigate(redirct);
  }, []);
  return (
    <div></div>
  );
};

export default Release;
