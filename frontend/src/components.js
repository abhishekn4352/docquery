export function createLoadingSpinner() {
  const spinner = document.createElement('div');
  spinner.className = 'flex justify-center items-center p-4';
  spinner.innerHTML = `
    <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
  `;
  return spinner;
}

export function createErrorAlert(message) {
  const alert = document.createElement('div');
  alert.className = 'bg-red-50 border-l-4 border-red-500 p-4 mb-4 rounded';
  alert.innerHTML = `
    <div class="flex">
      <div class="flex-shrink-0">
        <svg class="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
        </svg>
      </div>
      <div class="ml-3">
        <p class="text-sm text-red-700">${message}</p>
      </div>
    </div>
  `;
  return alert;
}

export function createSuccessAlert(message) {
  const alert = document.createElement('div');
  alert.className = 'bg-green-50 border-l-4 border-green-500 p-4 mb-4 rounded';
  alert.innerHTML = `
    <div class="flex">
      <div class="flex-shrink-0">
        <svg class="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
        </svg>
      </div>
      <div class="ml-3">
        <p class="text-sm text-green-700">${message}</p>
      </div>
    </div>
  `;
  return alert;
}

export function createToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = `fixed bottom-4 right-4 p-4 rounded-lg shadow-lg transform transition-all duration-300 translate-y-0 ${
    type === 'success' ? 'bg-green-500' : 'bg-red-500'
  } text-white`;
  toast.innerHTML = message;
  
  document.body.appendChild(toast);
  
  // Animate in
  setTimeout(() => {
    toast.classList.add('translate-y-0');
  }, 100);
  
  // Animate out after 3 seconds
  setTimeout(() => {
    toast.classList.add('translate-y-full');
    setTimeout(() => {
      document.body.removeChild(toast);
    }, 300);
  }, 3000);
  
  return toast;
} 