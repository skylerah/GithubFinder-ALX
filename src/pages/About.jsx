import React from 'react'

function About() {
    return (
        <div >
            <div class="container mx-auto py-10">
                <h1 class="text-4xl font-bold mb-6">About GitHub Finder</h1>
                <p class="text-gray-700 leading-7 mb-6">GitHub Finder is a web application that allows you to search for users and repositories on GitHub.
                    You can use it to quickly find information about GitHub users and repositories that you're interested in.
                </p>
                <p class="text-gray-700 leading-7 mb-6">GitHub Finder is built using the GitHub REST API and the React JavaScript library.
                    It's a great example of how to build a web application that interacts with a public API.
                </p>
                <h2 class="text-2xl font-bold mb-4">How to Use GitHub Finder</h2>
                <p class="text-gray-700 leading-7 mb-6">To use GitHub Finder, simply type a search query into the search box at the top of the page. You can search for users by their username or for repositories by their name. When you submit your search query, GitHub Finder will return a list of matching results.</p>
                <h2 class="text-2xl font-bold mb-4">Credits</h2>
                <p class="text-gray-700 leading-7 mb-6">GitHub Finder was created by Kevin Comba as a side project. The project is open source and available on GitHub. The Tailwind CSS & daisy UI framework was used to style the user interface.</p>
            </div>
        </div>
    )
}

export default About