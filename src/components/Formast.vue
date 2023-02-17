<script>
import { createVueFormast } from "formast/vue";
import schemaJson from "./form.json"; // 你自己的 JSON 文件，或通过 API 接口从服务端拉取 JSON

const { model, Formast } = createVueFormast(schemaJson);

export default {
    methods: {
        handleSubmit(e) {
            e.preventDefault();

            const errors = model.validate();
            if (errors.length) {
                console.error(errors);
                return;
            }

            const data = model.toData();
            console.log(data); // TODO 提交数据到后端
        }
    },
    render(h) {
        return (
            <div>
                <Formast onSubmit={this.handleSubmit} /> // 这里传入 onSubmit
                是由 JSON 内部决定的
            </div>
        );
    }
};
</script>
