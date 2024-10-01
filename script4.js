document.querySelectorAll('.thumbnail').forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
        const featuredImage = document.getElementById('featured');
        featuredImage.src = this.src; 
        featuredImage.alt = this.alt; 
    })
})
