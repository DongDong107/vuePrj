import Calc from './calc2.js'

Vue
.createApp({
	components:{
		Calc
	},
	template:`
		<section>
			<h1> 다양한 도구 컬렉션즈 </h1>
			<Calc/>
			<Calc/>
			<Calc/>
		</section>
	`
})
.mount("#app");

