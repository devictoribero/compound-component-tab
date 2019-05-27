import React from 'react'

export function Socials() {
  return(
    <footer style={styles}>
      <Link url="https://www.elrincondevictor.com/blog">www.elrincondevictor.com</Link>
      <Link url="https://twitter.com/victorException">Twitter</Link>
      <Link url="https://www.linkedin.com/in/victorribero/">Linkedin</Link>
    </footer>
  )
}

function Link({url, children}) {
  return(
    <a href={url} target="_blank" style={{padding: '10px 15px'}}>
      {children}
    </a>
  )
}

const styles = {
  display: 'flex'
}