const slides = [
        'https://cdn2.f-cdn.com/contestentries/54353/9658948/52d568259ec0f_thumb900.jpg',
        'https://cdn3.f-cdn.com/contestentries/54353/7145254/52d824a93c4cf_thumb900.jpg',
        'https://cdn6.f-cdn.com/contestentries/54353/6777695/52db6e2ee15c7_thumb900.jpg',
        'https://cdn5.f-cdn.com/contestentries/54353/7459163/52d4516c88599_thumb900.jpg'
    ];

    class Slider {
        constructor(slides) {

            this.slides = slides;
            this.index = 0;

            this.img = document.querySelector('.img');
            this.next = document.getElementById('next');
            this.previous = document.getElementById('previous');

            this.previous.addEventListener('click', this.previousSlide);
            this.next.addEventListener('click', this.nextSlide);
            window.addEventListener('keydown', this.keyboardControl);
            this.slide();
        }
    
        previousSlide = () => {
            this.index--;          
            this.slide();
        }
    
        nextSlide = () => {
            this.index++;
            this.slide();
        }
    
        slide() {
            if(this.index === 0) {
                this.previous.disabled = true;
            } else if (this.index === this.slides.length - 1) {
                this.next.disabled = true;
            } else {
                this.next.disabled = false;
                this.previous.disabled = false;
            }
            this.img.src = this.slides[this.index];
        }
        
    }

    const slider = new Slider(slides);