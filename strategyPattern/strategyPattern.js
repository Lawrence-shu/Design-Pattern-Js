const StrategyMap = {}
function context(type, ...rest) {
    return StrategyMap[type] && StrategyMap[type](...rest)
}
StrategyMap.minus100_30 = function(price) { 
  	return price - Math.floor(price / 100) * 30
}
context('minus100_30', 270)			// 输出: 210