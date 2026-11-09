
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{ if(entry.isIntersecting) entry.target.classList.add('visible'); });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const filters=[...document.querySelectorAll('.filter')];
const cards=[...document.querySelectorAll('.card')];
filters.forEach(btn=>btn.addEventListener('click',()=>{
  filters.forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  const f=btn.dataset.filter;
  cards.forEach(card=>{
    const cats=card.dataset.cat.split(' ');
    card.classList.toggle('hidden', f!=='all' && !cats.includes(f));
  });
}));

document.getElementById('joinBtn').addEventListener('click',()=>{
  document.getElementById('joinNote').textContent='Thanks! This demo form is ready to connect to your real newsletter platform.';
});
