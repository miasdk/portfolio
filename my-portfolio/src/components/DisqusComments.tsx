"use client";
import { useEffect } from 'react';

interface DisqusCommentsProps {
  pageIdentifier: string;
  pageUrl: string;
  title?: string;
}

export default function DisqusComments({ pageIdentifier, pageUrl, title }: DisqusCommentsProps) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://miaelena.disqus.com/embed.js';
    script.setAttribute('data-timestamp', Date.now().toString());
    script.async = true;
    
    (window as any).disqus_config = function() {
      this.page.url = pageUrl;
      this.page.identifier = pageIdentifier;
      if (title) {
        this.page.title = title;
      }
    };
    
    document.body.appendChild(script);
    
    return () => {
      const disqusThread = document.getElementById('disqus_thread');
      if (disqusThread) {
        while (disqusThread.firstChild) {
          disqusThread.removeChild(disqusThread.firstChild);
        }
      }
    };
  }, [pageIdentifier, pageUrl, title]);
  
  return (
    <div className="my-8">
      <div id="disqus_thread"></div>
      <noscript>
        Please enable JavaScript to view the comments.
      </noscript>
    </div>
  );
}