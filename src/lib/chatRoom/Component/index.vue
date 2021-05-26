<template>
    <div
        class="chat-room-container"
        :style="{
		width: `${chatWidth}px`,
		height: `${chatHeight}px`,
		}"
    >
        <div class="side-box">
            <div class="title">
                <span class="portrait">头像</span>
                <span class="userName">名字2323233333</span>
            </div>
            <div class="list">
                <div class="title">
                    <span class="portrait">头像</span>
                    <span class="userName">张三</span>
                </div>
                <div class="title">
                    <span class="portrait">头像</span>
                    <span class="userName">李四</span>
                </div>
            </div>
        </div>
        <div class="main-box">
            <div class="chat-panel">
                <div class="chat-panel-title">007ICU</div>
                <div class="chat-panel-content" :ref="contList">
                    <div class="my">
                        <div style="width: 20%"></div>
                        <div class="my-info">
                            <div class="my-userName">张三</div>
                            <div class="my-cont">
                                <span>你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀aa</span>
                            </div>
                        </div>
                        <div class="my-portrait">头像</div>
                    </div>

                    <div class="my">
                        <div style="width: 20%"></div>
                        <div class="my-info">
                            <div class="my-userName">张三</div>
                            <div class="my-cont">
                                <span>你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀aa</span>
                            </div>
                        </div>
                        <div class="my-portrait">头像</div>
                    </div>

                    <div class="my">
                        <div style="width: 20%"></div>
                        <div class="my-info">
                            <div class="my-userName">张三</div>
                            <div class="my-cont">
                                <span>你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀aa</span>
                            </div>
                        </div>
                        <div class="my-portrait">头像</div>
                    </div>

                    <div class="my">
                        <div style="width: 20%"></div>
                        <div class="my-info">
                            <div class="my-userName">张三</div>
                            <div class="my-cont">
                                <span>你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀aa</span>
                            </div>
                        </div>
                        <div class="my-portrait">头像</div>
                    </div>

                    <div class="you">
                        <div class="you-portrait">头像</div>
                        <div class="you-info">
                            <div class="you-userName">张三</div>
                            <div class="you-cont">
                                <span>你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀aa你好呀你好呀你好呀你好呀你好呀你好呀你好呀你好呀aa</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="chat-bottom">
                <div class="chat-utils">
                    <span class="iconfont">&#xe622;</span>
                    <span class="iconfont">&#xe64c;</span>
                    <span class="iconfont">&#xe742;</span>
                </div>
                <div class="chat-input" contenteditable></div>
                <button class="chat-send">发送</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref, onMounted } from 'vue'
export default defineComponent({
    name: "ChatRoom",
    props: {
        chatWidth: {
            type: Number,
            default: 100
        },
        chatHeight: {
            type: Number,
            default: 100
        },
    },
    setup() {
        // https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollIntoView
        // element.scrollIntoView()
        const state = reactive({
            num: 1
        })


        const contList = (el: Element) => {
            console.log(el?.lastElementChild)
            el.lastElementChild?.scrollIntoView(false);
        }

        onMounted(() => {

        })

        return {
            ...toRefs(state),
            contList,
        }
    }
})
</script>

<style lang="less" scoped>
@font-face {
    font-family: "iconfont"; /* Project id 1752680 */
    src: url("//at.alicdn.com/t/font_1752680_z093wslfhqq.woff2?t=1621595445779")
            format("woff2"),
        url("//at.alicdn.com/t/font_1752680_z093wslfhqq.woff?t=1621595445779")
            format("woff"),
        url("//at.alicdn.com/t/font_1752680_z093wslfhqq.ttf?t=1621595445779")
            format("truetype");
}

.iconfont {
    font-family: "iconfont" !important;
    font-size: 18px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    // color: pink;
    &:hover {
        color: #acacac;
    }
}

.chat-room-container {
    display: flex;
    border: 1px solid #ccc;

    .side-box {
        width: 20%;
        display: flex;
        flex-direction: column;
        // padding-left: 10px;
        box-sizing: border-box;
        background-color: #dfdfdf;

        .title {
            height: 80px;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            padding-left: 10px;
            box-sizing: border-box;

            .portrait {
                margin-right: 5px;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: pink;
            }

            .userName {
                flex: 1;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }

        .list {
            flex: 1;
            overflow: auto;

            .title {
                height: 16%;

                &:hover {
                    background-color: #d1d0d0;
                    cursor: pointer;
                }
            }

            &::-webkit-scrollbar {
                width: 3px;
                background-color: #ccc;
            }
        }
    }

    .main-box {
        flex: 7;

        .chat-panel {
            height: 70%;
            background-color: #f5f5f5;
            display: flex;
            flex-direction: column;

            .chat-panel-title {
                height: 16%;
                display: flex;
                align-items: center;
                justify-content: center;
                box-sizing: border-box;
                border-bottom: 1px solid #eee;
                font-size: 20px;
            }

            .chat-panel-content {
                padding: 0 5%;
                overflow: auto;
                flex: 1;

                &::-webkit-scrollbar {
                    width: 3px;
                    background-color: #ccc;
                }

                div:nth-child(1) {
                    margin-top: 0;
                }

                div:last-child {
                    margin-bottom: 2%;
                }

                .my {
                    display: flex;
                    margin-top: 20px;

                    .my-portrait {
                        width: 40px;
                        height: 40px;
                        background-color: skyblue;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin-left: 10px;
                    }

                    .my-info {
                        flex: 1;

                        .my-userName {
                            text-align: right;
                            font-size: 12px;
                        }

                        .my-cont {
                            margin-top: 5px;
                            span {
                                display: inline-block;
                                box-sizing: border-box;
                                padding: 10px;
                                background-color: #fff;
                                border-radius: 5px;
                            }
                        }
                    }
                }

                .you {
                    display: flex;
                    margin-top: 20px;
                    width: 80%;

                    .you-portrait {
                        width: 40px;
                        height: 40px;
                        background-color: skyblue;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin-right: 10px;
                    }

                    .you-info {
                        flex: 1;

                        .you-userName {
                            font-size: 12px;
                        }

                        .you-cont {
                            margin-top: 5px;
                            span {
                                display: inline-block;
                                box-sizing: border-box;
                                padding: 10px;
                                background-color: #fff;
                                border-radius: 5px;
                            }
                        }
                    }
                }
            }
        }

        .chat-bottom {
            height: 30%;
            border-top: 1px solid #dfdfdf;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;

            .chat-utils {
                height: 40%;
                display: flex;
                align-items: center;
                padding-left: 10px;

                span {
                    margin-right: 10px;
                    cursor: pointer;
                }
            }

            .chat-input {
                padding: 5px 12px;
                box-sizing: border-box;
                word-wrap: break-word;
                word-break: break-all;
                overflow: auto;
                height: 100%;

                &::-webkit-scrollbar {
                    width: 3px;
                    background-color: #ccc;
                }

                &:focus-visible {
                    outline: none;
                }
            }

            .chat-send {
                width: 20%;
                background-color: #eee;
                outline: none;
                border: none;
                margin-left: auto;
                margin-right: 2%;
                margin-bottom: 2%;
                padding: 1% 0;
                margin-top: 4%;

                &:hover {
                    background-color: #129611;
                    color: #fff;
                    cursor: pointer;
                }
            }
        }
    }
}
</style>
