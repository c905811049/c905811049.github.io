var botui = new BotUI("bot"),
  address = "House 1, First Ave.";

botui.message
  .bot({
    delay: 1000,
    content: "Hello!",
  })
  .then(
    botui.message.bot({
      delay: 2500,
      content: "我是Genkun",
    })
  )
  .then(
    botui.message.bot({
      delay: 4000,
      content: "欢迎来到我的博客",
    })
  )
  .then(function () {
    return botui.action.button({
      delay: 5500,
      addMessage: false, // so we could the address in message instead if 'Existing Address'
      action: [
        {
          text: "哦",
          value: "exist",
        },
        {
          text: "告诉我更多！",
          value: "new",
        },
      ],
    });
  })
  .then(function (res) {
    if (res.value == "exist") {
      botui.message.human({
        delay: 1500,
        content: "哦",
      }).then(
        botui.message.bot({
          delay: 3000,
          content: "再见~",
        })
      );
      end();
    } else {
      botui.message
        .human({
          delay: 1000,
          content: "告诉我更多！",
        })
        .then(
          botui.message.bot({
            delay: 3000,
            content: "我是一名计算机专业学生",
          })
        )
        .then(
          botui.message.bot({
            delay: 4000,
            content: "虽然是互联网专业，但学习的方向是前端",
          })
        )
        .then(
          botui.message.bot({
            delay: 5500,
            content: "了解HTML/CSS/JavaScript,Vue等前端知识",
          })
        )
        .then(
          botui.message.bot({
            delay: 7000,
            content: "爱好兴趣广泛",
          })
        );
      //   askAddress();
    }
  });

/* var askAddress = function () {
  botui.message
    .bot({
      delay: 500,
      content: "Please write your address below:",
    })
    .then(function () {
      return botui.action.text({
        delay: 1000,
        action: {
          size: 30,
          icon: "map-marker",
          value: address, // show the saved address if any
          placeholder: "Address",
        },
      });
    })
    .then(function (res) {
      botui.message.bot({
        delay: 500,
        content: "New address: " + res.value,
      });

      address = res.value; // save address

      return botui.action.button({
        delay: 1000,
        action: [
          {
            icon: "check",
            text: "Confirm",
            value: "confirm",
          },
          {
            icon: "pencil",
            text: "Edit",
            value: "edit",
          },
        ],
      });
    })
    .then(function (res) {
      if (res.value == "confirm") {
        end();
      } else {
        askAddress();
      }
    });
};

var end = function () {
  botui.message.bot({
    delay: 1000,
    content: "Thank you. Your package will shipped soon.",
  });
}; */
