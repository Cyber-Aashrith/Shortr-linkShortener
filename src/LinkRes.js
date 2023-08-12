import React, { useEffect } from 'react'
import "./App.css";
import CopyToClipboard from 'react-copy-to-clipboard';

const LinkRes = ({ inputValue }) => {
   const [ShortenLink, setShortenLink] = React.useState('');
   const [Copied, setCopied] = React.useState(false);
   const [loading, setLoading] = React.useState(false);
   const [error, setError] = React.useState(false);

   const fetchData = async () => {
      setLoading(true);
      const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${inputValue}`);
      const data = await res.json();
      setShortenLink(data.result.full_short_link);
      setLoading(false);
   }

   useEffect(() => {
     if(inputValue.length > 0) {
        fetchData();
     }
   }, [inputValue]);

   useEffect(() => {
      if (Copied) {
         const timer = setTimeout(() => {
            setCopied(false);
         }, 1000);
      return () => {
         clearTimeout(timer);
      }
    }
   }, [Copied]);

   if(loading) {
      return <p className='noData'>Loading...</p>
   }

   if(error) {
      return <p className='noData'>Something went wrong</p>
   }


  return (
    <>
      {ShortenLink && (
        <div className='result'>
      <p>{ShortenLink}</p>  
      <CopyToClipboard text={ShortenLink} onCopy={() => setCopied(true)}>

        <button className={Copied ? 'copied' : ''}>Copy To Clipboard</button>

      </CopyToClipboard>

      </div>
      )}
    </>
  )
}

export default LinkRes