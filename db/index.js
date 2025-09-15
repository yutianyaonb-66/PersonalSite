const mongoose = require('mongoose');
const chalk = require('chalk');

const isDev = process.env.NODE_ENV === 'development';
const dbUrl = process.env.MONGO_URI; // Render 环境变量

mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000, // 5秒超时
})
.then(() => {
    console.log(
        chalk.rgb(123, 45, 67).bold(
            `连接${isDev ? chalk.blue.bold('开发环境') : chalk.blue.bold('生产环境')}数据库成功：` +
            chalk.hex('#DEADED').underline(mongoose.connection.name)
        )
    );
})
.catch(err => {
    console.error('❌ MongoDB 连接失败: ', err);
});

mongoose.connection.on('error', err => console.error('MongoDB 错误: ', err));
mongoose.connection.on('disconnected', () => console.warn('⚠️ MongoDB 连接已断开'));

module.exports = mongoose.connection;
