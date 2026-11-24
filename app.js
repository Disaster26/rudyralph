(function(){
  var b=document.querySelector('.burger'),n=document.getElementById('nav');
  function zamknij(){b.setAttribute('aria-expanded','false');n.classList.remove('otwarte');document.body.style.overflow=''}
  b.addEventListener('click',function(){var o=b.getAttribute('aria-expanded')==='true';if(o){zamknij()}else{b.setAttribute('aria-expanded','true');n.classList.add('otwarte');document.body.style.overflow='hidden'}});
  n.addEventListener('click',function(e){if(e.target.closest('a'))zamknij()});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')zamknij()});

  var c=document.getElementById('cookies'),m=document.getElementById('mapa');
  function zgoda(){try{return localStorage.getItem('rr-zgoda')}catch(e){return null}}
  function mapa(){if(!m||m.querySelector('iframe'))return;var f=document.createElement('iframe');f.title='Mapa dojazdu: ul. Marcina Kasprzaka 31, Warszawa';f.loading='lazy';f.referrerPolicy='no-referrer-when-downgrade';f.src='https://maps.google.com/maps?q=Marcina%20Kasprzaka%2031%2C%2001-234%20Warszawa&z=15&output=embed';m.appendChild(f);var z=m.querySelector('.zas');if(z)z.remove()}
  function zapisz(v){try{localStorage.setItem('rr-zgoda',v)}catch(e){}c.hidden=true}
  c.addEventListener('click',function(e){var t=e.target.getAttribute('data-cookies');if(!t)return;zapisz(t);if(t==='tak')mapa()});
  if(m){
    var p=m.querySelector('[data-mapa]');if(p)p.addEventListener('click',function(){zapisz('tak');mapa()});
    if(zgoda()==='tak')mapa();
  }

  var f=document.getElementById('formularz');
  if(f)f.addEventListener('submit',function(e){e.preventDefault();var k=f.querySelector('.komunikat');if(!k){k=document.createElement('p');k.className='komunikat';f.appendChild(k)}k.textContent='To wersja robocza strony - formularz nie wysyła jeszcze wiadomości. Na gotowej stronie zgłoszenie trafi na office@rudyralph.eu, a nadawca dostanie potwierdzenie.'});
  var r=document.getElementById('rok');if(r)r.textContent=new Date().getFullYear();
})();
