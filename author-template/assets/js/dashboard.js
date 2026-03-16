/**
 * Dashboard JavaScript - Interactions & Section Switching
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Sidebar Toggle for Mobile
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');
    
    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            sidebar.classList.toggle('open');
        });
        
        // Close sidebar when clicking outside on mobile
        document.addEventListener('click', (e) => {
            if (sidebar.classList.contains('open') && !sidebar.contains(e.target) && e.target !== sidebarToggle) {
                sidebar.classList.remove('open');
            }
        });
    }

    // 2. Section Switching Logic
    const navItems = document.querySelectorAll('.dash-nav-item[data-section]');
    const sections = document.querySelectorAll('.dash-section');
    
    if (navItems.length > 0) {
        navItems.forEach(item => {
            item.addEventListener('click', (e) => {
                const sectionId = item.getAttribute('data-section');
                
                // If the link is to another page (not internal section switch), let it be
                if (!sectionId) return;
                
                e.preventDefault();
                
                // Update nav active state
                navItems.forEach(nav => nav.classList.remove('active'));
                item.classList.add('active');
                
                // Switch section visibility
                sections.forEach(sec => {
                    sec.classList.remove('active');
                    if (sec.id === sectionId) {
                        sec.classList.add('active');
                    }
                });
                
                // Close sidebar on mobile after selection
                if (window.innerWidth <= 992 && sidebar) {
                    sidebar.classList.remove('open');
                }
                
                // Smooth scroll to top of content
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        });
    }

    // 3. Functional Button Handlers (Mocks)
    
    // User Dashboard Actions
    setupActionButton('saveProfileBtn', 'Identity synchronized with the Star Systems successfully!');
    setupActionButton('clearActivityBtn', 'Activity logs have been archived for security.');
    setupActionButton('removeSaved1', 'Saved item removed from your blueprints.');
    setupActionButton('removeSaved2', 'Saved item removed from your blueprints.');
    setupActionButton('markAllRead', 'All sensory notifications marked as processed.');
    setupActionButton('changePasswordBtn', 'Security key rotation protocol initiated. Check your encrypted mail.');
    setupActionButton('deleteAccountBtn', 'DESTRUCTION PROTOCOL: This action requires high-level clearance (Mock confirmation).', true);
    
    // Admin Dashboard Actions
    setupActionButton('sendBulletinBtn', 'Broadcast directive transmitted across all sectors!');
    setupActionButton('loadChartsBtn', 'Lore Analytics: Data visualization initialized.');
    setupActionButton('clearCacheBtn', 'Global system cache purged. Performance optimized.');
    setupActionButton('rebootServerBtn', 'SERVER REBOOT: Critical systems entering standby (Mock).', true);

    /**
     * Helper to setup feedback for mock actions
     */
    function setupActionButton(id, message, isCritical = false) {
        const btn = document.getElementById(id);
        if (btn) {
            btn.addEventListener('click', (e) => {
                if (e.target.tagName === 'FORM' || btn.getAttribute('type') === 'submit') {
                    e.preventDefault();
                }
                
                // Show a simple alert for feedback (In a real app, use a toast)
                if (isCritical) {
                    if (confirm(`CRITICAL ACTION: ${message}\n\nProceed with this operation?`)) {
                        alert('Operation successful.');
                    }
                } else {
                    alert(message);
                }
            });
        }
    }

    // 4. Form Submission Mocks
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Feedback already handled by button click in many cases, but as backup:
            if (!e.defaultPrevented) alert('Data transmitted successfully.');
        });
    });

    // 5. Theme Sync Persistence (Handling local storage check)
    const currentTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
});
