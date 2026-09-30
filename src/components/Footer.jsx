import React from 'react';

export default function Footer({ name }) {
  return (
    <footer class="site-footer">
      <div class="container">
        <p>&copy; {new Date().getFullYear()} {name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
