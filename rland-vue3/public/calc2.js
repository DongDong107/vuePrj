export default {
	data(){
		return{
			x:20,
			y:30,
			z:0
		};
	},
	methods:{
		calcHandler(e){
//			e.preventDefault();
			this.z = this.x + parseInt(this.y);
			console.log(z);
		},
		resetHandler(e){
//			e.preventDefault();
			console.log("reset");
		}
		
	},
	template:`<section id="calc">
    <h1>덧셈 계산기</h1>
    <form>
        <fieldset>
            <legend>계산기 입력폼</legend>
            <div>
                <label>x:</label>
               <input dir="rtl" v-model.trim.number="x" @input="calcHandler">
                <label>y:</label>
                <input dir="rtl" v-model="y">
                <span>=</span>
                <span v-text="z"></span>
            </div>
            <hr>
            <div>
                <input type="submit" value="초기화" @click.prevent="resetHandler">
                <input type="submit" value="계산하기" v-on:click.prevent="calcHandler">
            </div>
        </fieldset>
    </form>
</section>`
	
}

