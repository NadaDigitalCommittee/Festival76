export default {
  data() {
    return {
      meta: {
        title: null,
        description: '第76回灘校文化祭「Turn it Over🔥」公式ウェブサイト。2022年5月2~3日開催。',
      },
    };
  },
  head() {
    const sitename = '第76回灘校文化祭「Turn it Over🔥」';
    const baseurl = 'https://fest.nada-sc.jp/2022';
    const title = this.meta.title ? `${this.meta.title} - ${sitename}` : sitename;
    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: this.meta.description },
        { hid: 'og:title', name: 'og:title', content: title },
        { hid: 'og:description', name: 'og:description', content: this.meta.description },
        { hid: 'og:url', name: 'og:url', content: `${baseurl}${this.$route.path}` },
      ],
    };
  },
};
