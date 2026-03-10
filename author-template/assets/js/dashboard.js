/**
 * Dashboard & Vault specific JS
 */

document.addEventListener('DOMContentLoaded', () => {

  // Dashboard Tab System
  const tabs = document.querySelectorAll('[data-tab-target]');
  const tabContents = document.querySelectorAll('[data-tab-content]');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.dataset.tabTarget;
      
      // Remove active class from all tabs and contents
      tabs.forEach(t => t.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));
      
      // Add active class to clicked tab and its content
      tab.classList.add('active');
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.classList.add('active');
      }
    });
  });

  // Vault Unlock / Secret Access Interaction
  const vaultLocks = document.querySelectorAll('.vault-lock-btn');
  
  vaultLocks.forEach(btn => {
    btn.addEventListener('click', function() {
      const parentCard = this.closest('.vault-card');
      if (parentCard) {
        // Mocking an unlock process
        this.innerHTML = 'Unlocking...';
        this.disabled = true;
        
        setTimeout(() => {
          parentCard.classList.remove('locked');
          parentCard.classList.add('unlocked');
          this.innerHTML = 'Access Granted';
        }, 1500);
      }
    });
  });
});
