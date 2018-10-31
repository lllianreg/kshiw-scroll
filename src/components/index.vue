<template>
  <div class="main clearfix">
    <div class="item">
      <h2>vertical</h2>
      <div class="vertical-list">
        <k-scroll vertical @callbacks="callbacks">
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>10</li>
            <li>11</li>
            <li>12</li>
            <li>13</li>
            <li>14</li>
            <li>15</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>10</li>
            <li>11</li>
            <li>12</li>
            <li>13</li>
            <li>14</li>
            <li>15</li>
          </ul>
        </k-scroll>
      </div>
    </div>

    <div class="item">
      <h2>horizontal</h2>
      <div class="horizontal-list">
        <k-scroll horizontal @callbacks="callbacks">
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>10</li>
            <li>11</li>
            <li>12</li>
            <li>13</li>
            <li>14</li>
            <li>15</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>10</li>
            <li>11</li>
            <li>12</li>
            <li>13</li>
            <li>14</li>
            <li>15</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>10</li>
            <li>11</li>
            <li>12</li>
            <li>13</li>
            <li>14</li>
            <li>15</li>
          </ul>
        </k-scroll>
      </div>
    </div>
  </div>
</template>

<script>
  import kScroll from './scroll'
  export default {
    name: "ww",
    data() {
      return {
        obj: null
      }
    },
    components: {
        kScroll
    },
    methods: {
      callbacks(obj) {
        this.obj = obj
      }
    }
  }
</script>

<style scoped lang="less">
  body{width: 100%;}
  ul, li {margin: 0; padding: 0; list-style: none}
  .main{margin: 0 auto; width:100%;}
  .item{text-align: left; width: 40%; float: left}

  .vertical-list {
    background: #eee;
    margin-top: 20px;
    width: 300px;
    height: 300px;
    padding: 10px;
    overflow: hidden;
    ul {
      position: relative;
    }
  }

  .horizontal-list {
    background: #eee;
    margin-top: 20px;
    width: 100%;
    height: 300px;
    overflow: hidden;
    padding: 10px;
    position: relative;
    ul {
      white-space: nowrap;
      li{margin-right: 10px; display: inline-block}
    }
  }
</style>
