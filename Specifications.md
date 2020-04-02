# ComicClan - React Webapp Specification

### Description


ComicClan, an online community of comic book enthusiasts, has contacted you to help them develop their new online library of comic books. The library will represent the combined collection of comic books owned by the community members.

Fortunately enough, all the data is already cataloged into their DB with a simple API delivering all the information you need. They are asking that you develop a React web-app based on a provided design.


### Specifications

- Implement the following designs into a working web application based on React.
- The API endpoint for the list of comic books is accessible at `https://comicclan.vett.io/comics`. 
  - For authentication pass the following header:  `Authorization: *********`.
  - If you add the `?q=<term>` url parameter you’ll get a filtered list of comic books based on their name.
- Parse the API response and display the results as outlined in the design (including the inner page).
- The application should allow the following grouping categories:
  - Year (default)
  - Writer
  - Artist
  - Owner
  - Random
- The application should allow searching for comic books based on a name (or partial name).
