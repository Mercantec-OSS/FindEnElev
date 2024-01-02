<script lang="ts">
    export let picture: string;
    export let personalWebsite: string;
    export let githubProfile: string;
    export let GHPicture: string;
</script>

<div class="student-card">
 <img class="student-picture" alt="Student" src="{picture}" />
 <h2 class="student-name"><slot name="name"></slot></h2>
 <a class="student-link" href="{personalWebsite}" target="_blank">Personal Website</a>
 <a class="github-link" href="{githubProfile}" target="_blank"> <img class="GitHubPic" alt="GitHub Logo" src="{GHPicture}"> GitHub Profile</a>
</div>

<style>
    .student-card {
     border: 1px solid #ccc;
     border-radius: 5px;
     padding: 1em;
     width: 200px;
    }
   
    .student-picture {
     width: 100%;
     height: auto;
    }
    .GitHubPic {
     width: 100%;
     height: auto;
    }
   
    .student-name {
     margin: 1em 0;
    }
   
    .student-link, .github-link {
     display: block;
     margin-top: 1em;
     text-decoration: none;
     color: #fefefe;
    }
   </style>
   
