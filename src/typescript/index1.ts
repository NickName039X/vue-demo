type Form = {
    status: number
    type: string
    timeType: string
    beginDate: string
    endDate: string
  }
class StandardsAudit {
    private status = 'second'
  
    private radio1 = ''
  
    private date = ''
  
    private reviewObjectId = ''
  
    private loading = false
  
    private auditDialog = {
      show: false
    }
  
    private formData: Form = {
      status: 1,
      type: '-1',
      timeType: '-1',
      beginDate: '',
      endDate: ''
    }
  
    private COLUMNS = [
      {
        label: '任务ID',
        prop: 'id',
        align: 'taskId'
      },
      {
        label: '任务类型',
        prop: 'taskType',
        align: 'left',
        slot: true
      },
      {
        label: '送审人',
        prop: 'submitter',
        align: 'left'
      },
      {
        label: '审核时间',
        prop: 'oprationTime',
        align: 'left'
      },
      {
        label: '审核结论',
        prop: 'conclusion',
        slot: true
      },
      {
        label: '审核意见',
        prop: 'suggestion'
      },
      {
        label: '操作',
        prop: 'control',
        slot: true,
        width: 100,
        align: 'left'
      }
    ]
  
    private multipleSelection = []

}
  
export default {}
  
  
  