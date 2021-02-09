// 用于配制和初始化 auth 模块
package setup

import (
	"github.com/juju/errors"
	"github.com/lantu-dev/puki/pkg/auth/models"
	"github.com/lantu-dev/puki/pkg/auth/services"
	"github.com/lantu-dev/puki/pkg/base"
	"gorm.io/gorm"
)

const MOD_NAME = "auth"

// 模块初始化
func Setup(reg *base.ServiceRegistry, db *gorm.DB) (err error) {
	err = errors.Trace(db.AutoMigrate(&models.User{}))
	if err != nil {
		return
	}

	err = reg.RegisterService(MOD_NAME, services.NewUserService(db))
	if err != nil {
		return
	}

	return
}
