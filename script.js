document.addEventListener('DOMContentLoaded', function() {
    // ヘッダーのスクロール効果
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // スムーススクロール
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // お問い合わせフォームの送信処理
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // フォームデータの取得
            const formData = new FormData(this);
            const formDataObj = {};
            
            formData.forEach((value, key) => {
                formDataObj[key] = value;
            });
            
            // 通常はここでAPIを呼び出して送信します
            console.log('送信されたデータ:', formDataObj);
            
            // 送信完了メッセージの表示
            alert('お問い合わせありがとうございます。折り返しご連絡いたします。');
            
            // フォームのリセット
            this.reset();
        });
    }

    // アニメーション効果
    const animateOnScroll = function() {
        const elementsToAnimate = document.querySelectorAll('.feature-card, .pricing-card, .testimonial-card');
        
        elementsToAnimate.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animate');
            }
        });
    };
    
    // CSSにアニメーションクラスを追加
    const style = document.createElement('style');
    style.innerHTML = `
        .feature-card, .pricing-card, .testimonial-card {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .feature-card.animate, .pricing-card.animate, .testimonial-card.animate {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
    
    // 初期ロード時とスクロール時にアニメーションをチェック
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();
}); 