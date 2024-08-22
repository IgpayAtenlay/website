import { useEffect } from 'react';

export function useFooter(info) {
    useEffect(() => {
      document.querySelectorAll("footer a")[0].outerHTML = "<a href='https://github.com/IgpayAtenlay" + info.link + "' target='_blank' rel='noopener noreferrer'>" + info.name + " Github</a>";
    });
  }