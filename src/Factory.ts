class Mother {
  static giveMe(whatYouWant: "tangtang" | "feifei") {
    switch (whatYouWant) {
      case "tangtang":
        console.log("宝宝，你一个人吃果冻是非常危险的哦，妈妈喂你~~");
        return Mother.chewJelly(new Jelly());
      case "feifei":
        console.log("宝宝，家里已经买了很多飞机了哦，");
        return null;
      default:
        return null;
    }
  }

  static chewJelly(jelly: Jelly) {
    jelly.chewed = true;
    return jelly;
  }
}
//果冻类
class Jelly {
  //是否咀嚼过的果冻
  chewed = false;
}
//玩具飞机
class ToyPlane {}

function xiaomi(factoryName: "battery" | "screen") {
  switch (factoryName) {
    case "battery":
      return MobileBatteryFactory;
    case "screen":
      return MobileScreenFactory;
  }
}

class Battery {
  name: "";
}

class MobileBatteryFactory {
  static get(): Battery {
    return new Battery();
  }
}

class MobileScreenFactory {
  static get() {
    return { name: "screen" };
  }
}

class AllFactory {
  static fetFieldTest = () => fieldTest;
  static getMother = () => Mother;
}

//正则工厂
function fieldTest(fieldName: "phone" | "email" | "character"): RegExp {
  switch (fieldName) {
    case "phone":
      return /^1[3|4|5|8][0-9]\d{4,8}$/;
      break;
    case "email":
      return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    case "character":
      return /^[\u4e00-\u9fa5]{0,}$/;
    default:
      return null;
  }
}

export {
  Mother,
  Jelly,
  ToyPlane,
  fieldTest,
  xiaomi,
  Battery,
  MobileBatteryFactory,
  MobileScreenFactory,
  AllFactory
};
