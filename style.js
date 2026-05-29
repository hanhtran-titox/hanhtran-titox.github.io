    document.querySelector('#printResume')?.addEventListener('click', () => window.print());
    function initSmartStickySidebar() {
      const sidebar = document.querySelector('.sidebar');
      if (!sidebar) return;

      function updateSticky() {
        if (window.innerWidth <= 768) {
          sidebar.style.top = 'auto';
          return;
        }

        const viewportHeight = window.innerHeight;
        const sidebarHeight = sidebar.offsetHeight;

        if (sidebarHeight + 64 > viewportHeight) {
          sidebar.style.top = `${viewportHeight - sidebarHeight - 32}px`;
        } else {
          sidebar.style.top = '2rem';
        }
      }

      window.addEventListener('resize', updateSticky);
      if (typeof ResizeObserver !== 'undefined') {
        new ResizeObserver(updateSticky).observe(sidebar);
      }
      updateSticky();
    }

    document.addEventListener('DOMContentLoaded', initSmartStickySidebar);
