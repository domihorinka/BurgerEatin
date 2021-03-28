document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
      console.info('DOM loaded');
    }
  

    const changeDevouredBtns = document.querySelectorAll('.change-devoured');
  
    
    if (changeDevouredBtns) {
      changeDevouredBtns.forEach((button) => {
        button.addEventListener('click', (e) => {
          console.log('test');
          const id = e.target.getAttribute('data-id');
          const newDevoured = e.target.getAttribute('data-newdevoured');
  
          const newDevouredState = {
            devoured: newDevoured,
          };
  
          fetch(`/api/burger/${id}`, {
            method: 'PUT',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
  
            
            body: JSON.stringify(newDevouredState),
          }).then((response) => {
            if (response.ok) {
              console.log(`changed devoured to: ${newDevoured}`);
              location.reload('/');
            } else {
              alert('something went wrong!');
            }
          });
        });
      });
    }
  
    const createBurgerBtn = document.getElementById('create-form');
  
    if (createBurgerBtn) {
      createBurgerBtn.addEventListener('submit', (e) => {
        e.preventDefault();
  

        const newBurger = {
          burger_name: document.getElementById('bu').value.trim(),
          devoured: document.getElementById('devd').checked,
        };
        console.log(newBurger);
  
        fetch('/api/burger', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
  
          body: JSON.stringify(newBurger),
        }).then(() => {
          document.getElementById('bu').value = '';
  
          console.log('Created a new burger!');
          location.reload();
        });
      });
    }
  });
  