<script lang="ts">
  import OSSLogo from './assets/Mercantec-OSS-W.png'
  import GHLogo from './assets/GitHub.png'
  import Footer from './lib/Footer.svelte'
  import StudentCard from './lib/StudentCard.svelte';
</script>

<main>
  <div class="header">
    <a href="https://github.com/Mercantec-OSS/FindEnElev" target="_blank" rel="noreferrer">
      <img src={OSSLogo} class="logo" alt="Mercantec-OSS Logo" />
    </a>
    <h1> Velkommen til Find En Elev</h1>
  </div>

  <div class="students-container">
    <StudentCard picture="{OSSLogo}" personalWebsite="http://example.com" githubProfile="https://github.com/Mercantec-OSS" GHPicture="{GHLogo}">
      <span slot="name">John Doe</span>
     </StudentCard>
     <StudentCard picture="{OSSLogo}" personalWebsite="http://example.com" githubProfile="https://github.com/Mercantec-OSS" GHPicture="{GHLogo}">
      <span slot="name">Mathias GS</span>
     </StudentCard>  
     <StudentCard picture="{OSSLogo}" personalWebsite="http://example.com" githubProfile="https://github.com/Mercantec-OSS" GHPicture="{GHLogo}">
      <span slot="name">Anders</span>
     </StudentCard>  
     <StudentCard picture="{OSSLogo}" personalWebsite="http://example.com" githubProfile="https://github.com/Mercantec-OSS" GHPicture="{GHLogo}">
      <span slot="name">Jesper</span>
     </StudentCard>  
  </div>
</main>
<Footer />

<style>
  .logo {
    height: 12em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #64ff76aa);
  }
  .students-container {
    display: flex;
    gap: 20px; /* Adjust the value to increase or decrease the space */
    padding: 20px;
  }

 main{
  min-height: 400px;
  margin-bottom: 100px;
  clear: both;
 }
 .header{
  display: flex;
  align-items: center;
 }

</style>
