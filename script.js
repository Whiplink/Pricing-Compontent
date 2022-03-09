const price1 = document.querySelector('#price1')
const price2 = document.querySelector('#price2')
const price3 = document.querySelector('#price3')

const switchBtn = document.querySelector('.switch')

const switchObj = {
  currentState: 'Annually',
  switch(){
    if(this.currentState == 'Annually'){
      this.currentState = 'Monthly'
      this.update('$19.99', '$24.99', '$39.99')
    }else
    if(this.currentState == 'Monthly'){
      this.currentState = 'Annually'
      this.update('$199.99','$249.99','$399.99')
    }
  },
  update(x,y,z){
    price1.textContent = x
    price2.textContent = y
    price3.textContent = z
  }
}
switchObj.update('$199.99','$249.99','$399.99')

switchBtn.addEventListener('click', () => {
  switchObj.switch()
  switchBtn.classList.toggle('active')
})