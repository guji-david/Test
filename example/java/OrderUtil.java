package com.chengyiwm.common.utils;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 
 * @ClassName: OrderUtil
 * @Description: 订单工具类
 * @author guokunpeng
 * @date 2016年3月4日 下午2:58:49
 * 
 */
public class OrderUtil {
	// 状态
	public static final int ORDER_CREATED = 0; // 下单完成
	public static final int ORDER_WAIT_PAY = 10; // 待打款
	public static final int ORDER_WAIT_PAY_CHECK = 15; // 打款待审核
	public static final int ORDER_WAIT_REBATE = 20; // 持有中
	public static final int ORDER_APPLY_REDEEM = 25; // 申请赎回
	public static final int ORDER_OVER = 30; // 完成
	public static final int ORDER_CANCELED = 100; // 已取消
	public static final int ORDER_DELETE = 200; // 已删除
	public static final int ORDER_AUDIT_NOT_PASS = 300;		// 订单确认审核不通过
	public static final int ORDER_PAYAUDIT_NOT_PASS = 400;	// 打款审核不通过
	public static final int ORDER_APPLY_REDEEM_NOT_PASS = 500;	// 申请赎回审核不通过

	// 操作
	public static final int OP_CREATE = 1; // 下单
	public static final int OP_CONFIRM = 2; // 确认
	public static final int OP_CANCEL = 3; // 取消
	public static final int OP_PAY = 4; // 打款
	public static final int OP_REBATE = 5; // 反佣
	public static final int OP_DELETE = 6; // 删除
	public static final int APPLY_REDEEM = 7; // 申请赎回

	
	//封装类型
	public static final String USER_ORDERS = "user_orders"; // 用户订单
	
	// public static final int OP_BACK = 6; // 后台操作
//	public static List<Integer> orderStatusList = new ArrayList<Integer>(3);
	public static Map<Integer,List<Integer>> SELECT_STATUS = new HashMap<Integer,List<Integer>>();
	static{
		List<Integer> statusList = new ArrayList<Integer>();
		statusList.add(ORDER_WAIT_PAY);
		statusList.add(ORDER_WAIT_PAY_CHECK);
		statusList.add(ORDER_PAYAUDIT_NOT_PASS);
		SELECT_STATUS.put(ORDER_WAIT_PAY, statusList);//在投产品
		
		statusList = new ArrayList<Integer>();
		statusList.add(ORDER_WAIT_REBATE);
		statusList.add(ORDER_APPLY_REDEEM);
		statusList.add(ORDER_APPLY_REDEEM_NOT_PASS);
		SELECT_STATUS.put(ORDER_WAIT_REBATE, statusList);//持有中
		
		
		statusList = new ArrayList<Integer>();
		statusList.add(ORDER_OVER);
		SELECT_STATUS.put(ORDER_OVER, statusList);//已完成
		
//		orderStatusList.add(ORDER_WAIT_PAY);
//		orderStatusList.add(ORDER_WAIT_REBATE);
//		orderStatusList.add(ORDER_OVER);
	}
	/**
	 * 判断当前状态下是否可以进行给定的操作
	 * 
	 * @param orderState
	 * @param op
	 */
	public static boolean checkOrderOP(int orderStatus, int op) {
		switch (op) {
		case OP_CREATE:
			return true;
		case OP_CONFIRM:
			if (orderStatus == ORDER_CREATED)
				return true;
			else
				return false;
		case OP_CANCEL:
			if (orderStatus == ORDER_CREATED)
				return true;
			else
				return false;
		case OP_PAY:
			if (orderStatus == ORDER_WAIT_PAY)
				return true;
			else
				return false;
		case OP_REBATE:
			if (orderStatus == ORDER_WAIT_REBATE)
				return true;
			else
				return false;
		case OP_DELETE:
			if (orderStatus == ORDER_OVER || orderStatus == ORDER_WAIT_PAY)
				return true;
			else
				return false;
		case APPLY_REDEEM:
			if (orderStatus == ORDER_WAIT_REBATE)
				return true;
			else
				return false;
		default:
			return false;

		}
	}
}
