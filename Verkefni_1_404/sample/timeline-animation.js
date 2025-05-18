anime
  .timeline({
    easing: 'easeOutExpo',
    duration: 750,
    loop: true,
  })
  .add({ targets: '.timeline', translateX: 250 })
  .add({ targets: '.timeline', scale: 2, offset: '-=500' })
  .add({ targets: '.timeline', rotate: '1turn' });
