// /​**​
//  * VitePress 标题锚点生成器
//  * @param title 原始标题文本（支持中文、特殊字符）
//  * @param options 配置项（允许自定义分隔符和重复处理）
//  * @returns 符合规范的锚点ID
//  */
function generateVitePressAnchor(title, slugMap) {
    const separator = '-';
    // Step 1: 文本标准化处理
    let slug = title
        .toLowerCase() // 转小写（规则来源：网页3/网页7）
        .replace(/[\s_]+/g, separator) // 空格/下划线转分隔符（如"hello_world" → "hello-world"）
        .replace(/[^\p{L}\d\-]/gu, '') // 过滤非字母/数字/分隔符（保留中文，规则来源：网页1/网页3）
        .replace(new RegExp(`\\${separator}+`, 'g'), separator) // 合并连续分隔符
        .replace(new RegExp(`^\\${separator}|\\${separator}$`, 'g'), ''); // 去除首尾分隔符
    //数字开头的前面加分隔符
    if (/^\d/.test(slug)) {
        slug = separator + slug;
    }

    // Step 2: 处理空锚点（如纯符号标题）
    if (!slug) return '';

    // Step 3: 重复标题编号逻辑
    if (!slugMap) return slug;

    const originalSlug = slug;
    let counter = 1;
    while (slugMap.has(slug)) {
        slug = `${originalSlug}-${counter++}`;
    }
    slugMap.set(originalSlug, (slugMap.get(originalSlug) || 0) + 1);
    return slug;
}

// 测试用例
const testTitles = [
    '默认锚点示例',        // → "默认锚点示例"
    'Hello World!',       // → "hello-world"
    'VitePress 实战指南',  // → "vitepress-实战指南"
    'API_设计与规范',      // → "api设计与规范"
    '重复标题',            // → "重复标题"
    '重复标题',            // → "重复标题-1"
    '## 特殊@字符过滤',     // → "特殊字符过滤"
    "1. 先通过",
];
slugMap = new Map(); // 用于重复标题计数
for (const title of testTitles) {
    console.log(title, '->', generateVitePressAnchor(title, slugMap));
}
