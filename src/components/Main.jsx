import { useEffect } from 'react';

function Main() {
    useEffect(() => {
        const filterBtns = document.querySelectorAll('.filter-btn');
        const galleryItems = document.querySelectorAll('.gallery-item');

        filterBtns.forEach((btn) => {
            btn.addEventListener('click', () => {
                document.querySelector('.filter-btn.active').classList.remove('active');
                btn.classList.add('active');
                const category = btn.dataset.category;

                galleryItems.forEach((item) => {
                    if (category === 'all' || item.dataset.category === category) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });

    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = document.querySelector('.lightbox-img');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const closeBtn = document.querySelector('.close');

    let currentImageIndex = 0;

    const openLightbox = (index) => {
      currentImageIndex = index;
      lightbox.style.display = 'flex';
      lightboxImg.src = galleryItems[currentImageIndex].querySelector('img').src;
    };

    const closeLightbox = () => {
      lightbox.style.display = 'none';
    };

    galleryItems.forEach((item, index) => {
      item.addEventListener('click', () => {
        openLightbox(index);
      });
    });

    prevBtn.addEventListener('click', () => {
      currentImageIndex = (currentImageIndex - 1 + galleryItems.length) % galleryItems.length;
      lightboxImg.src = galleryItems[currentImageIndex].querySelector('img').src;
    });

    nextBtn.addEventListener('click', () => {
      currentImageIndex = (currentImageIndex + 1) % galleryItems.length;
      lightboxImg.src = galleryItems[currentImageIndex].querySelector('img').src;
    });

    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none'
    })

    lightbox.addEventListener('click', (e) => {
      if (e.target.classList.contains('lightbox')) {
        closeLightbox();
      }
    });

    return () => {
        filterBtns.forEach((btn) => btn.removeEventListener('click', () => {}));
        galleryItems.forEach((item) => item.removeEventListener('click', () => {}));
        prevBtn.removeEventListener('click', () => {});
        nextBtn.removeEventListener('click', () => {});
        lightbox.removeEventListener('click', () => {});
        };
    }, []);

    return (
        <>
        <div className="content">
            <div className="about" id="home">
                <div className="about-container">
                    <div className="about-photo">
                        <img 
                        src="https://images.pexels.com/photos/8644073/pexels-photo-8644073.jpeg?auto=compress&cs=tinysrgb&w=600" 
                        alt="Photo Profile" />
                    </div>

                    <div className="about-content" id="about">
                        <h1>About Me</h1>
                        <p>
                            Hello, my name is <strong>Reinxuan</strong> I am a professional photographer dedicated to capturing the precious moments of your life. With over 5 years of experience, I have worked on various projects, including wedding, nature, travel, and lifestyle photography.
                        </p>
                        <p>
                            My skills include using modern photography techniques, editing photos with Adobe Lightroom and Photoshop, and creating visually appealing compositions.
                        </p>
                        <p>
                            I believe that every photo has a story, and my job is to make sure that story is told beautifully and memorably.
                        </p>
                        <a href="#gallery" className="btn-primary">See My Work</a>
                    </div>
                </div>        
            </div>

            <h1 id="gallery">Gallery of Works</h1>
            <p>Explore my photography works categorized by theme.</p>

            <div className="gallery-filter">
                <button className="filter-btn active"  data-category="all">All</button>
                <button className="filter-btn" data-category="wedding">Wedding</button>
                <button className="filter-btn" data-category="nature">Nature</button>
                <button className="filter-btn" data-category="urban">Urban</button>
                <button className="filter-btn" data-category="travel">Travel</button>
            </div>

            <div className="gallery-grid">
                <div className="gallery-item" data-category="wedding">
                    <img 
                    src="https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Wedding"
                    loading="lazy" />
                </div>
                <div className="gallery-item" data-category="nature">
                    <img 
                    src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="Nature"
                    loading="lazy" />
                </div>
                <div className="gallery-item" data-category="urban">
                    <img 
                    src="https://images.pexels.com/photos/307847/pexels-photo-307847.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="Urban"
                    loading="lazy" />
                </div>
                <div className="gallery-item" data-category="travel">
                    <img 
                    src="https://images.pexels.com/photos/2174656/pexels-photo-2174656.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="Travel"
                    loading="lazy" />
                </div>
                <div className="gallery-item" data-category="wedding">
                    <img 
                    src="https://images.pexels.com/photos/1488312/pexels-photo-1488312.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="Wedding"
                    loading="lazy" />
                </div>
                <div className="gallery-item" data-category="nature">
                    <img 
                    src="https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="Nature"
                    loading="lazy" />
                </div>
                <div className="gallery-item" data-category="urban">
                    <img 
                    src="https://images.pexels.com/photos/137077/pexels-photo-137077.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="Urban"
                    loading="lazy" />
                </div>
                <div className="gallery-item" data-category="travel">
                    <img 
                    src="https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="Travel"
                    loading="lazy" /> 
                </div>
                <div className="gallery-item" data-category="wedding">
                    <img 
                    src="https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="Wedding"
                    loading="lazy" />
                </div>
                <div className="gallery-item" data-category="nature">
                    <img 
                    src="https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="Nature"
                    loading="lazy" />
                </div>
                <div className="gallery-item" data-category="urban">
                    <img 
                    src="https://images.pexels.com/photos/421129/pexels-photo-421129.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="Urban"
                    loading="lazy" />
                </div>
                <div className="gallery-item" data-category="travel">
                    <img 
                    src="https://images.pexels.com/photos/2087391/pexels-photo-2087391.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="Travel"
                    loading="lazy" />
                </div>
            </div>
        </div>
        <div className="contact" id="contact">
            <h1>Contact Me</h1>
            <p>I would love to hear from you! Send a message via the following form or contact me via social media.</p>
  
            <form action="https://formspree.io/f/mvggyjgr" method="POST" className="contact-form">
                <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Enter your name" required />
                </div>
                <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="_replyto" placeholder="Enter your email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows="5" placeholder="Write a message" required></textarea>
                </div>
                <button type="submit" className="btn-primary">Send Message</button>
            </form>
  
            <div className="social-links">
                <p>Or find me at:</p>
                <a href="https://www.instagram.com/raichan.ma" target="_blank">Instagram</a>
                <a href="https://www.twitter.com/Xadhyaksa" target="_blank">Twitter</a>
                <a href="https://wa.me/6282313931717" target="_blank">Whats'app</a>
            </div>
        </div>

        {/* Lightbox */}
        <div className="lightbox" style={{ display: 'none' }}>
            <span className="close">&times;</span>
            <img className="lightbox-img" src="" alt="" />
            <span className="prev">&lt;</span>
            <span className="next">&gt;</span>
        </div>
        </>
    )
}

export default Main