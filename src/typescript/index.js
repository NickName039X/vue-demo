"use strict";
exports.__esModule = true;
var StandardsAudit = /** @class */ (function () {
    function StandardsAudit() {
        this.status = 'second';
        this.radio1 = '';
        this.date = '';
        this.reviewObjectId = '';
        this.loading = false;
        this.auditDialog = {
            show: false
        };
        this.formData = {
            status: 1,
            type: '-1',
            timeType: '-1',
            beginDate: '',
            endDate: ''
        };
        this.COLUMNS = [
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
        ];
        this.multipleSelection = [];
    }
    return StandardsAudit;
}());
