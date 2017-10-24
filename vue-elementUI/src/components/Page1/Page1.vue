<template>
    <div>
        <div style="border-radius:5px;">
            <StudentForm></StudentForm>
        </div>

        <br/>

        <div style="border:1px solid;margin-top:5px;background-color:#FFFFFF;border-radius:5px">
            <StudentTable :searchflag="search"></StudentTable>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import StudentForm from './StudentForm.vue'
    import StudentTable from './StudentTable.vue'
    export default {
        data () {
            return {

            }
        },

        components: {
            StudentForm: StudentForm,
            StudentTable: StudentTable
        },

        computed: {
            search(){
                return this.$store.state.student.studentQueryFlag;
            }
        }
    }
</script>

<style>

</style>
