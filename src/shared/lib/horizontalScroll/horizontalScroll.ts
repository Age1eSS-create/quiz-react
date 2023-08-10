export const horizontalScroll = (e:any, speed = 50) => {
    e = window.event || e;
    const delta = Math.max(-1, Math.min(1, (e?.wheelDelta || -e.detail)));
    const scroll = document?.getElementById('statistic-table');
    if (!scroll) return;
    scroll.scrollLeft -= (delta * 50);
};
