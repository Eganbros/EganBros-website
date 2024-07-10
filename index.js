document.addEventListener('DOMContentLoaded', () => {
    // Action button visible arrow on hover
    const button = document.getElementById('contactButton');

    button.addEventListener('mouseenter', () => {
        button.classList.add('hovered', 'arrow');
    });

    button.addEventListener('mouseleave', () => {
        button.classList.remove('hovered', 'arrow');
    });

    // Dropdown menu chevron
    const dropdowns = document.querySelectorAll('.nav-section.dropdown');

    dropdowns.forEach(dropdown => {
        const btn = dropdown.querySelector('.dropbtn');
        const chevron = dropdown.querySelector('.chevron-icon');
        const content = dropdown.querySelector('.dropdown-content');

        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const isVisible = content.classList.contains('show');
            closeAllDropdowns();
            if (!isVisible) {
                chevron.classList.add('show'); // Change chevron icon
                content.classList.add('show'); // Show the dropdown
                btn.style.color = '#AB1D22'; // Change title color to red
            }
        });

        dropdown.addEventListener('mouseenter', () => {
            chevron.classList.add('show'); // Change chevron icon on hover
        });

        dropdown.addEventListener('mouseleave', () => {
            if (!content.classList.contains('show')) {
                chevron.classList.remove('show'); // Reset chevron icon when not hovered
            }
        });
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown')) {
            closeAllDropdowns();
        }
    });

    function closeAllDropdowns() {
        dropdowns.forEach(dropdown => {
            const btn = dropdown.querySelector('.dropbtn');
            const chevron = dropdown.querySelector('.chevron-icon');
            const content = dropdown.querySelector('.dropdown-content');

            btn.style.color = ''; // Reset title color
            chevron.classList.remove('show'); // Reset chevron icon
            content.classList.remove('show'); // Hide the dropdown
        });
    }

    // Hamburger menu functionality
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const rightSideMenu = document.getElementById('rightSideMenu');
    const closeMenu = document.getElementById('closeMenu');
    const menuLinks = document.getElementById('menuLinks');
    const middleNav = document.querySelector('.middle-nav');

    // Event listener to open the menu
    hamburgerMenu.addEventListener('click', () => {
        rightSideMenu.classList.add('open'); // Add the 'open' class
        closeMenu.style.display = 'block'; // Show the close icon
        loadMenuLinks(); // Load the links dynamically
    });

    // Event listener to close the menu
    closeMenu.addEventListener('click', () => {
        rightSideMenu.classList.remove('open'); // Remove the 'open' class
        closeMenu.style.display = 'none'; // Hide the close icon
    });

    // Close the menu if clicked outside
    document.addEventListener('click', (event) => {
        if (!event.target.closest('#hamburgerMenu') && !event.target.closest('#rightSideMenu')) {
            rightSideMenu.classList.remove('open'); // Remove the 'open' class
            closeMenu.style.display = 'none'; // Hide the close icon
        }
    });

    // Function to load links dynamically from middle-nav
    function loadMenuLinks() {
        menuLinks.innerHTML = ''; // Clear existing links
        const sections = middleNav.querySelectorAll('.nav-section');
        sections.forEach(section => {
            const title = section.querySelector('.dropbtn').textContent;
            const links = section.querySelectorAll('.dropdown-content a');
            const sectionHeader = document.createElement('h3');
            sectionHeader.textContent = title;
            menuLinks.appendChild(sectionHeader);
            links.forEach(link => {
                const newLink = document.createElement('a');
                newLink.href = link.href;
                newLink.textContent = link.textContent;
                menuLinks.appendChild(newLink);
            });
        });
    }
});
