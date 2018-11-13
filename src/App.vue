<script>
export default {
  data () {
    return {

    }
  },
  methods: {

  },
  created() {
    wx.cloud.init()
    const db = wx.cloud.database({env: 'nana-cit'})
    console.log(db)
  }
}
</script>

<style>
button::after{ border: none; }
</style>
